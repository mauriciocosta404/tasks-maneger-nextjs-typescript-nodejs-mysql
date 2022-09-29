import { UsersRepository } from "../../repositories/implements/UsersRepository";
import { GetUsersController } from "./getUsersController";
import { GetUsersUseCase } from "./GetUsersUseCase";

const usersRepository=new UsersRepository();
const getUsersUseCase= new GetUsersUseCase(usersRepository);
const getUsersController= new GetUsersController(getUsersUseCase);

export {getUsersController};