import { Router } from "express";
import { userController } from "../dependencies";

const userRouter = Router();

userRouter.post("/login", userController.authUser);
userRouter.post("/create", userController.createUser);

export { userRouter }