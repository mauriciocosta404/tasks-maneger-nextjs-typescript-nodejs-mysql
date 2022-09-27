import { IAdminRepository } from "../../repositories/IAdminRepository";

interface IUsersRequest{
    email: string;
    password:string;
}

class AuthenticateUserUseCase{

    constructor(private adminRepository:IAdminRepository){}

    execute({email,password}:IUsersRequest){
        const adminExists = this.adminRepository.verifyIfExists(email);

        if (!adminExists) {
            throw new Error("User don exists"); 
        }

        return adminExists;
    }

}
export {AuthenticateUserUseCase};  