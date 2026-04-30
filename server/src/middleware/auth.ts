import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { Request, Response, NextFunction } from 'express'
dotenv.config()

interface UserPayload extends jwt.JwtPayload{
    user_id: number,
    username: string,
    email: string
}



export function authenticateToken(req:Request, res:Response, next:NextFunction) {
    const {accessToken, refreshToken} = req.cookies
    console.log("access token", accessToken, "refresh token", refreshToken)
    console.log("hit middleware")

    const secret: string = process.env.ACCESS_TOKEN as string;

//authorize token acess token first

jwt.verify( accessToken, secret, (err: jwt.VerifyErrors | null, user: jwt.JwtPayload | string | undefined): void | Response => {
    if (err) {

    //authorize refresh token after

    //if refresh token exists, verify token

   // else return status 400

   //if verification fails, return status 400
      return res.status(400).json({ status: "invalid token" });
      
    }

    console.log("payload:", user)

    

    

})

next()


  

}


