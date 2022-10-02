import {Response,Request} from 'express';
import { IAdminRepository } from '../../repositories/IAdminRepository';
import { AdminRepository } from '../../repositories/implements/AdminRepository';
import { AuthenticateAdminUseCase } from './AuthenticateAdminUseCase';
class AuthenticateAdminController{
    constructor(private authenticateAdminUseCase:AuthenticateAdminUseCase){}
    
    async handle(request:Request,response: Response){
        const {email,password}=request.body;

        const token=await this.authenticateAdminUseCase.execute({email,password});
        response.json(token);
    }
}
export {AuthenticateAdminController};