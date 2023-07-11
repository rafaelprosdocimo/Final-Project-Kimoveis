import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { decode, verify } from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authorization: string | undefined = req.headers.authorization;
  if (!authorization) throw new AppError("Missing bearer token", 401);

  const [_bearer, token]: Array<string> = authorization.split(" ");

  // res.locals = {
  //   ...res.locals,
  //   decoded: verify(token, process.env.SECRET_KEY!),
  //   userId: decode.sub
  // };

  verify(token, process.env.SECRET_KEY!, (err, decoded: any)=>{
    if(err) throw new AppError(err.message, 401);
    res.locals = {
      ...res.locals,
      decoded,
      userId: decoded.sub,
      admin: decoded.admin
    }; 
  });


  return next();
};