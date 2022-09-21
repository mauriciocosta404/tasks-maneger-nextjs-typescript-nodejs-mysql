import { UsersRepository } from "../repositories/implementetions/UsersRepository";
import { GetUsersController } from "./GetUsersController";
import { GetUsersUseCase } from "./GetUsersUseCase";

const usersRepository=new  UsersRepository();

const getUsersUseCase=new GetUsersUseCase(usersRepository);

const getUsersController=new  GetUsersController(getUsersUseCase);

export {getUsersController};