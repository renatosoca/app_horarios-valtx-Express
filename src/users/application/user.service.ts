import { BcryptRepository } from "../../shared/domain";
import { UserRepository, User } from "../domain";

export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly bcryptRespository: BcryptRepository
  ) { }

  getUserById = async (userId: string) => {
    const user = await this.userRepository.getUserById(userId);
    return user;
  }

  getUserByEmail = async (email: string) => {
    const user = await this.userRepository.getUserByEmail(email);
    return user;
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