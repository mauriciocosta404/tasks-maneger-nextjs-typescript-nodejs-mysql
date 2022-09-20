import { UsersRepository } from "../repositories/implementetions/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from './CreateUserUseCase';

const userRepository=new UsersRepository;

const createUserUseCase=new CreateUserUseCase(userRepository);

const createUserController=new CreateUserController(createUserUseCase);

export {createUserController};