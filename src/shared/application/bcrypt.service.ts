import { BcryptRepository } from "../domain";

export class BcryptService {
  constructor(private readonly bcryptRepository: BcryptRepository) { }

  hashPassword = (password: string): string => {
    const hashedPassword = this.bcryptRepository.hashPassword(password);

    return hashedPassword;
  }

  comparePassword = (password: string, hash: string): boolean => {
    const isPasswordValid = this.bcryptRepository.comparePassword(password, hash);

    return isPasswordValid;
  }
}