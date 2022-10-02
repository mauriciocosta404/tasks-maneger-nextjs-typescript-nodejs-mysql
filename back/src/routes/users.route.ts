import { Router } from "express";
import { createUserController } from "../useCases/createUser";
import { getUsersController } from "../useCases/getUsers";

const usersRoute=Router();

usersRoute.post('/',(request,response)=>{
    createUserController.handle(request,response);
});

usersRoute.get('/',(request,response)=>{
    getUsersController.handle(request,response);
});

export {usersRoute};