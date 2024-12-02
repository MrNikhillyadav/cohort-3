import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken"
import {JWT_PASSWORD} from './config'

export function userMiddleware(req:Request, res: Response, next:NextFunction ) {
          const token = req.headers.token ;
          
          const decodedRes =  jwt.verify(token as string,JWT_PASSWORD)
          
          if(decodedRes){
                    //@ts-ignore
                    req.userId = decodedRes._id
                    next()
          }else{
                    res.status(403).json({
                              message : 'You are not logged in'
                    })
          }
          
}