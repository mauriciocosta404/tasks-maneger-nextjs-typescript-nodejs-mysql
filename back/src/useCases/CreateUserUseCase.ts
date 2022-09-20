import { User } from '../model/User';
import { IUsersRepository } from '../repositories/IUsersRepository';
import { ICreateUserRequestDTO } from './ICreateUserDTO';
export class CreateUserUseCase{
    constructor(private userRepository:IUsersRepository){}

   async execute({email,name,password}:ICreateUserRequestDTO){
        const verifyIfUserAlreadyExists=this.userRepository.findByEmail(email);
        console.log(verifyIfUserAlreadyExists);
        if (verifyIfUserAlreadyExists) {
            throw new Error("user already exists");
        }

        
        this.userRepository.save({name,email,password});
   }
}