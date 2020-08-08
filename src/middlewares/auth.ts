import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token: any = req.headers["access-token"];
    if (!token) return res.status(403).json({ message: "token required" });
    jwt.verify(token, req.app.get("jwt-secret"), (err, decoded) => {
        if (err) return res.status(403).json({ message: "token check failed" });
        req["decoded"] = decoded;
        next();
    })
}