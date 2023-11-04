import { Router } from "express";
import { signInUser,signUpUser } from "../controllers/userController";

const userRouter = Router();

userRouter.post("/signup", signUpUser);

userRouter.post("/signin", signInUser);

export default userRouter;