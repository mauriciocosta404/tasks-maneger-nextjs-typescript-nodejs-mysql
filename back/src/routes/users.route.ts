import { Router } from "express";
import { UsersRepository } from "../repositories/UsersRepository";
import { CreateUsersService } from "../services/CreateUsersService";

const usersRoute=Router();
const usersRepository=new UsersRepository();

usersRoute.post('/',(request,response)=>{
    const {name,email,password}=request.body;

    const createUsersService=new CreateUsersService(usersRepository);

    createUsersService.execute({name,email,password});

    return response.json({message:'created'});
});

usersRoute.get('/',(request,response)=>{
    const allUsers=usersRepository.list();
    
    return response.json(allUsers);
});

export {usersRoute};