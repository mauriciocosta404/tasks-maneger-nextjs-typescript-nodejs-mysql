import { IAdminRepository } from "../../repositories/IAdminRepository";
import { IAuthenticateAdmin } from "./IAuthenticateAdmin";
import { sign } from 'jsonwebtoken';

class AuthenticateAdminUseCase{

    constructor(private adminRepository:IAdminRepository){}

    async execute({email,password}:IAuthenticateAdmin){
        const adminAlreadyExists=this.adminRepository.verifyIfExists(email);
    
        if (!adminAlreadyExists || adminAlreadyExists.password!==password) {
            throw new Error("user dont exist");
        }

        const token = sign({},'08173a01-987e-4e64-bb0f-69ad176e7b1a',{
            subject:adminAlreadyExists.id,
            expiresIn:"10s"
        });

        return token;
      
    }
}
export {AuthenticateAdminUseCase};