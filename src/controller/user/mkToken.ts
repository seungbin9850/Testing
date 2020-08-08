import { Request } from "express";
import jwt from "jsonwebtoken";

export const mkAccess = async (req: Request, user: Object): Promise<string> => {
    const secret = req.app.get('jwt-secret');
    const token: string = await jwt.sign({
        id: user["id"],
        userId: user["userId"],
    }, secret, {
        expiresIn: "30m",
    });
    return token;
}