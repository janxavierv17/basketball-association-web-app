import express from "express";
import { authenticateUser } from "../../controller/auth/auth.controller.js";
const authRouter = express.Router();

authRouter.get("/authenticate", authenticateUser);

export default authRouter;
