import { Router } from "express";
import { UsersRepository } from "../repositories/implements/UsersRepository";
import { createUserController } from "../services/createUser";
import { getUsersController } from "../services/getUsers";

const usersRoute=Router();

usersRoute.post('/',(request,response)=>{
    createUserController.handle(request,response);
});

usersRoute.get('/',(request,response)=>{
    getUsersController.handle(request,response);
});

export {usersRoute};