import { Router } from "express";
import { userController } from "../dependencies";

const userRouter = Router();

userRouter.get("/", userController.getUserById);
userRouter.post("/", userController.createUser);
userRouter.get("/email", userController.getUserByEmail);

export { userRouter }