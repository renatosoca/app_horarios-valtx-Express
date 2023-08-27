import { bcryptController } from "../../shared/infrastructure/dependencies";
import { UserService } from "../application";
import { UserController } from "./controllers/user.controller";
import { inMongoUserRepository } from "./repositories/user.mongo";

//SHARED

const userRepository = new inMongoUserRepository();
const userService = new UserService(
  userRepository,
  bcryptController
);

export const userController = new UserController(userService);