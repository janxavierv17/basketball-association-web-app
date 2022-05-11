import express from "express";
import { signin, signup } from "../../controller/user/user.controller.js";
import {
  tokenController,
  verifyAdmin,
  verifyToken,
  verifyUser,
  verifyUserHandler,
} from "../../utils/verifyToken.js";
export const userRouter = express.Router();

userRouter.get("/verify_token", verifyToken, tokenController);
userRouter.get("/check_verification/:id", verifyUser, verifyUserHandler);
userRouter.get("/check_verification_admin/:id", verifyAdmin, verifyUserHandler);
userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
