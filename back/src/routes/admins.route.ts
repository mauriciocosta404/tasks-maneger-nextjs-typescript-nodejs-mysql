import { Router } from "express";
import { AdminRepository } from "../repositories/implements/AdminRepository";

const adminRoute=Router();
const  adminRepository=new AdminRepository();

adminRoute.get('/',(request,response)=>{
    const allAdmins=adminRepository.getAdmin();

    return response.json(allAdmins);
});



export {adminRoute};