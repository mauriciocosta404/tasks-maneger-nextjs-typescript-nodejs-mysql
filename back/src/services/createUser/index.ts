import { UsersRepository } from "../../repositories/implements/UsersRepository";
import { CreateUsersController } from "./createUseeController";
import { CreateUsersUseCase } from "./CreateUsersUseCase";

const userRepository=new UsersRepository();
const createUserUseCase=new CreateUsersUseCase(userRepository);
const createUserController=new CreateUsersController(createUserUseCase);

export {createUserController};