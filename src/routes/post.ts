import express from "express";
import { tryCatchMiddleware } from "../middlewares/try-catch";
import { authMiddleware } from "../middlewares/auth";
import * as Post from "../controller/post/post.controller";

const router = express();

router.post("/", authMiddleware, tryCatchMiddleware.NotFound(Post.write));


export default router;