import { request, response, Router } from "express";
import { AdminRepository } from "../repositories/implements/AdminRepository";
import { authenticateAdminController } from "../services/authenticate";
import { AuthenticateAdminController } from "../services/authenticate/AuthenticateAdminController";
import { AuthenticateAdminUseCase } from "../services/authenticate/AuthenticateAdminUseCase";

const adminRoute=Router();
const  adminRepository=new AdminRepository();

adminRoute.get('/',(request,response)=>{
    const allAdmins=adminRepository.getAdmin();
    
    return response.json(allAdmins);
});

adminRoute.post('/login',async (request,response)=>{
    authenticateAdminController.handle(request,response);
});



export {adminRoute};