import { Request,Response,NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"
import {JWT_PASSWORD} from './config'

export function userMiddleware(req:Request, res: Response, next:NextFunction ) {
          const token = req.headers.token ;
          
          const decoded =  jwt.verify(token as string,JWT_PASSWORD)
          
          if (decoded) {
                if (typeof decoded === "string") {
                    res.status(403).json({
                        message: "You are not logged in"
                    })
                    return;    
                }
                req.userId = (decoded as JwtPayload).id;
                next()
            } else {
                res.status(403).json({
                    message: "You are not logged in"
                })
            }
          
}