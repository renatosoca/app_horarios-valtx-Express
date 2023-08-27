import { BcryptService } from "../../application";

export class BcryptController {
  constructor(
    private readonly bcryptService: BcryptService
  ) { }

  hashPassword = (password: string) => {
    const hashedPassword = this.bcryptService.hashPassword(password);

    return hashedPassword;
  }

  comparePassword = (password: string, hash: string) => {
    const isPasswordValid = this.bcryptService.comparePassword(password, hash);

    return isPasswordValid;
  }
}
