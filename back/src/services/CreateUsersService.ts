import { IUsersRepository } from "../repositories/IUsersRapository";

interface IRequest{
    name:string;
    email:string;
    password:string;
}

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