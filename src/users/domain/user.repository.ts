import { User } from "./";

export interface UserRepository {
  getUserById(userId: string): Promise<User | null>;
  getUserByEmail(email: string): Promise<User | null>;
  createUser(user: User): Promise<User>;
  updateUser(id: string, user: User): Promise<User | null>;
  deleteUser(userId: string): Promise<boolean>;
}