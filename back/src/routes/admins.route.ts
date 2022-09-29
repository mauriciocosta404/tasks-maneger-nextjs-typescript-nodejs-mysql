import { request, response, Router } from "express";
import { adminAutenticated } from "../middlewares/auth-meddlewares";
import { AdminRepository } from "../repositories/implements/AdminRepository";
import { authenticateAdminController } from "../services/authenticate";
import { getAdminsController } from "../services/getAdmins";

const adminRoute=Router();
const  adminRepository=new AdminRepository();

adminRoute.get('/',(request,response)=>{
    getAdminsController.handle(request,response);
});

adminRoute.post('/login',(request,response)=>{
    authenticateAdminController.handle(request,response);
});

export {adminRoute};