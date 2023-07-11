import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { verify } from "jsonwebtoken";

 const verifyUserPermission = (
    req: Request,
    res: Response,
    next: NextFunction
  ): void => {
    const admin: boolean = res.locals.admin;
    if (!admin) throw new AppError("Insufficient permission", 403);
  
    return next();
};

export { verifyUserPermission};