export interface BcryptRepository {
  hashPassword(password: string): string;
  comparePassword(password: string, hash: string): boolean;
}