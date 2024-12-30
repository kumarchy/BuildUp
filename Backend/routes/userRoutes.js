import { Router } from "express";
import {
  createUser,
} from "../controller/userController.js";

const userRouter = Router();
userRouter.post("/", createUser);
export default userRouter;