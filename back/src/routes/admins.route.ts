import { Router } from "express";
import { adminAutenticated } from "../middlewares/auth-meddlewares";
import { authenticateAdminController } from "../useCases/authenticate";
import { getAdminsController } from "../useCases/getAdmins";

const adminRoute=Router();

adminRoute.get('/',(request,response)=>{
    getAdminsController.handle(request,response);
});

adminRoute.post('/login',(request,response)=>{
    authenticateAdminController.handle(request,response);
});



export {adminRoute};