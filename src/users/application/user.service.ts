import { BcryptRepository, JWRRepository } from "../../shared/domain";
import { UserRepository, User } from "../domain";

export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly bcryptRespository: BcryptRepository,
    private readonly jwtRepository: JWRRepository,
  ) { }

  loginUser = async (email: string, password: string) => {
    const userExist = await this.userRepository.getUserByEmail(email);
    if (!userExist) return null;

    const isPasswordValid = this.bcryptRespository.comparePassword(password, userExist.password);
    if (!isPasswordValid) return null;

    const token = this.jwtRepository.generateJWT(userExist);
    console.log(token)
    return token;
  }

  createUser = async (user: User) => {
    const userExist = await this.userRepository.getUserByEmail(user.email);
    if (userExist) return null;

    const paramsSend = {
      ...user,
      completeName: `${user.name} ${user.lastName}`,
      password: this.bcryptRespository.hashPassword(user.password),
      status: true,
    }

    const newUser = await this.userRepository.createUser(paramsSend);
    return newUser;
  }

  updateUser = async (id: string, user: User) => {
    const updatedUser = await this.userRepository.updateUser(id, user);
    return updatedUser;
  }
}