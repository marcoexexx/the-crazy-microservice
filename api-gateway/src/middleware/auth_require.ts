import { NextFunction, Request, Response } from "express";

export async function authRequire(req: Request, res: Response, next: NextFunction) {
  if (!req.userId) return res.status(401).json({ message: "required auth." });

  return next();
}
