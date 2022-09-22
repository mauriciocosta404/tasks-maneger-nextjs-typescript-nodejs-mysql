import { User } from "../model/User";

interface ICreateUserDTO{
    name:string;
    email:string;
    password:string;
}

interface IUsersRepository{
    findByEmail(email:string):boolean;
    create({name,email,password}:User):void;
    list():User[];
}
export {ICreateUserDTO,IUsersRepository};