import { compareSync, genSaltSync, hashSync } from "bcrypt";

export class BcryptRepository implements BcryptRepository {

  hashPassword = (password: string): string => {
    const salt = genSaltSync(10);
    return hashSync(password, salt);
  }

  comparePassword = (password: string, hash: string): boolean => {
    return compareSync(password, hash);
  }
}