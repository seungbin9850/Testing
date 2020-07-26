import { Request, Response, NextFunction } from "express";

interface handlerFunc {
    (req: Request, res: Response): void;
}

export class tryCatchMiddleware {
    static NotFound = (cb: handlerFunc): handlerFunc => {
        return async (req: Request, res: Response) => {
            try {
                await cb(req, res);
            } catch (e) {
                res.status(404).json({
                    message: e.message
                })
            }
        }
    }
    static Conflict = (cb: handlerFunc): handlerFunc => {
        return async (req: Request, res: Response) => {
            try {
                await cb(req, res);
            } catch (e) {
                res.status(409).json({
                    message: e.message
                })
            }
        }
    }
    static ServerError = (cb: handlerFunc): handlerFunc => {
        return async (req: Request, res: Response) => {
            try {
                await cb(req, res);
            } catch (e) {
                res.status(500).json({
                    message: e.message
                })
            }
        }
    }
}