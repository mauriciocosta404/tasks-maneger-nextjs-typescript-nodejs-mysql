import { IUsersRepository } from "../../repositories/IUsersRapository";
import { IRequest } from "./ICreateUsers";

class CreateUsersService{
    constructor(private usersRepository:IUsersRepository){}

    execute({name,email,password}:IRequest){

        const userAlreadyExists=this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error("user already exists");
        }        

        this.usersRepository.create({name,email,password});
    }
}
export {CreateUsersService};