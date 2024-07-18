import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

/// Only resolve auth from token
/// Not thrown or return error
export async function authResolver(req: Request, res: Response, next: NextFunction) {
  try {
    let authorizationHeader = req.header("authorization");

    let token = authorizationHeader && authorizationHeader.startsWith("Bearer")
      ? authorizationHeader.split(" ")[1]
      : req.cookies?.token as string | undefined;

    // Check token in request header or cookies.
    if (!token) return next();

    let payload = jwt.verify(token, process.env.SECRET_KEY!);
    req.userId = payload.sub as string;

    return next();
  } catch (err) {
    return next(err);
  }
}
