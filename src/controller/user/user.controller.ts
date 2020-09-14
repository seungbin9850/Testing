import { Request, Response, NextFunction } from "express";
import * as query from "./query";
import { mkAccess } from "./mkToken";

export const register = async (req: Request, res: Response) => {
  const { name, userId, password } = req.body;
  const user = await query.findOneById(userId);
  if (user) throw new Error("이미 존재하는 아이디");
  await query.create(name, userId, password);
  res.status(200).json({ message: "성공" });
};

export const login = async (req: Request, res: Response) => {
  const { userId, password } = req.body;
  const user: any = await query.findOneById(userId);
  if (user.password !== password) res.status(403).json({ message: "실패" });
  else {
    const accessToken = await mkAccess(req, user);
    user.accessToken = accessToken;
    user.save();
    res.status(200).json({ accessToken, message: "성공" });
  }
};
