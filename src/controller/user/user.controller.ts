import { Request, Response, NextFunction } from "express";
import * as query from "./query";

export const register = async (req: Request, res: Response) => {
    const { name, userId, password } = req.body;
    const user = await query.findOneById(userId);
    if (user) throw new Error("이미 존재하는 아이디");
    await query.create(name, userId, password);
    res.status(200).json({ message: "성공" });
}