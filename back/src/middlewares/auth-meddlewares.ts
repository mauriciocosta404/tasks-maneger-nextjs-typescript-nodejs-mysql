import { NextFunction,Request,Response } from "express";
import { verify } from "jsonwebtoken";

export function adminAutenticated(request:Request,response: Response,next:NextFunction){
    const authToken=request.headers.authorization;

    if(!authToken){
        return response.status(404).json({
            message:"unauthorized",
        })
    }
    
    const [,token]=authToken.split(" ");
 
    try {       
        verify(token, '08173a01-987e-4e64-bb0f-69ad176e7b1a');
        return next();
    } catch (err) {
        return response.status(401).json({message:'token unauthorized'});
    }
}