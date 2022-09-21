import { Response,Request } from "express";
import { GetUsersUseCase } from "./GetUsersUseCase";

class GetUsersController{
    constructor(private getUsersUseCase:GetUsersUseCase){}      

    async handleUsers(request:Request,response:Response){
        const users=this.getUsersUseCase.execute();

        return users;
    }
}
export {GetUsersController};