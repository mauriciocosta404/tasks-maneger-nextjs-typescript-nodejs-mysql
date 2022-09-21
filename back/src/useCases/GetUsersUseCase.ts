import { IUsersRepository } from '../repositories/IUsersRepository';

class GetUsersUseCase{
    constructor(private userRepository:IUsersRepository){};

    async execute(){
        const allUsers=this.userRepository.getUsers();

        //if (!allUsers) {
          //  throw new Error("Empty");
        //}

        return allUsers;
    }
}
export {GetUsersUseCase};