import { UsersRepository } from "../../repositories/implements/UsersRepository";

class GetUsersUseCase{
    constructor(private usersRepository:UsersRepository){}

    async execute(){
        const allUsers=await this.usersRepository.list();

        return allUsers;
    }
}
export {GetUsersUseCase}