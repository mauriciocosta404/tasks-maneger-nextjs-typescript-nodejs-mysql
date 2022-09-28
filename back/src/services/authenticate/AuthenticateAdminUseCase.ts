import { IAdminRepository } from "../../repositories/IAdminRepository";
import { IAuthenticateAdmin } from "./IAuthenticateAdmin";
import { sign } from 'jsonwebtoken';

class AuthenticateAdminUseCase{

    constructor(private adminRepository:IAdminRepository){}

    async execute({email,password}:IAuthenticateAdmin){
        const adminAlreadyExists=this.adminRepository.verifyIfExists(email);
    
        if (!adminAlreadyExists) {
            throw new Error("user dont exist");
        }
        if(adminAlreadyExists.password===password){
            const token = sign({},'08173a01-987e-4e64-bb0f-69ad176e7b1a',{
                subject:adminAlreadyExists.id.toString(),
                expiresIn:"10s"
            });
            return token;
       }
    }
}
export {AuthenticateAdminUseCase};