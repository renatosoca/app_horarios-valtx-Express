import { User, UserRepository } from "../../domain";
import userModel from "../models/user.model";

export class inMsqUserRepository implements UserRepository {
  getUserById(userId: string): Promise<User | null> {
    const user = userModel.findById(userId).exec();

    return user;
  }

  getUserByEmail(email: string): Promise<User | null> {
    const user = userModel.findOne({ email }).exec();

    return user;
  }

  createUser(user: User): Promise<User> {
    const newUser = new userModel(user);

    return newUser.save();
  }

  updateUser(id: string, user: User): Promise<User | null> {
    const userUpdated = userModel.findByIdAndUpdate(id, user, { new: true }).exec();

    return userUpdated;
  }

  deleteUser(userId: string): Promise<boolean> {
    throw new Error(`Method not implemented ${userId}.`);
  }
}