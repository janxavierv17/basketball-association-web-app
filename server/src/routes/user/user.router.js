import express from "express";
import { signin, signup } from "../../controller/user/user.controller.js";
export const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);
