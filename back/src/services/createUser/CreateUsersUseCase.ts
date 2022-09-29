import { IUsersRepository } from "../../repositories/IUsersRapository";
import { IRequest } from "./ICreateUsers";

class CreateUsersUseCase{
    constructor(private usersRepository:IUsersRepository){}

    async execute({name,email,idAdmin}:IRequest){

        const userAlreadyExists=this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error("user already exists");
        }        

        this.usersRepository.create({name,email,idAdmin});
    }
}
export {CreateUsersUseCase};