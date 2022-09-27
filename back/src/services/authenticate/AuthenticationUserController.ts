import { Request,RequestHandler,Response } from "express";
import { AdminRepository } from "../../repositories/implements/AdminRepository";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AutenticationUserController{
    handle(request:Request,response:Response){
        const {email,password}=request.body;
        const adminRepository=new AdminRepository();
        const authenticateUserUseCase=new AuthenticateUserUseCase(adminRepository);

        const admin = authenticateUserUseCase.execute({email,password});

        return response.json(admin);
    }
}
export {AutenticationUserController};