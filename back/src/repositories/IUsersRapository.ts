import { User } from "../model/User";

interface ICreateUserDTO{
    name:string;
    email:string;
    idAdmin:string;
    id:string;
}

interface IUsersRepository{
    findByEmail(email:string):boolean;
    create({name,email,idAdmin}:User):void;
    list():User[];
}
export {ICreateUserDTO,IUsersRepository};