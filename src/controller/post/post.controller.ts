import { Request, Response } from "express";
import * as query from "./query";

export const write = async (req: Request, res: Response) => {
    const { title, content } = req.body;
    const userId = req["decoded"].id;
    const id = await query.mkId();
    await query.writeOne(id, title, content, userId);
    res.status(200).json({ message: "성공" });
}