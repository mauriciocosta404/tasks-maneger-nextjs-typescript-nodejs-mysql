import { User } from "../../model/User";
import { IUsersRepository } from "../IUsersRepository";
import { ICreateUserRequestDTO } from '../../useCases/ICreateUserDTO';

class UsersRepository implements IUsersRepository{

    private usersRepository:User[]=[];

    async save({name,email,password}: ICreateUserRequestDTO): Promise<User> {

        const user=new User;

        Object.assign(user,{
            name:name,
            email:email,
            password:password
        })

        this.usersRepository.push(user);
        return user;
    }
    findByEmail(email: string): boolean {
        console.log(this.usersRepository);
        
        const verifyIfUserExists= this.usersRepository.some((item)=>item.email===email);
        return verifyIfUserExists;
    }
}
export {UsersRepository};