import { Response,Request } from "express";
import { GetUsersUseCase } from "./GetUsersUseCase";

class GetUsersController{
    constructor(private getUsersUseCase:GetUsersUseCase){}

    async handle(request:Request,response: Response){

        try {
            const allUsers=await this.getUsersUseCase.execute();

            return response.json(allUsers);
        } catch (error) {
            return response.status(400).json({message:error.message || "unexpected"});
        }
    }
}
export {GetUsersController}