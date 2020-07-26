import express from "express";
import { tryCatchMiddleware } from "../middlewares/try-catch";
import * as User from "../controller/user/user.controller";

const router = express();

router.post('/register', tryCatchMiddleware.Conflict(User.register));

export default router;