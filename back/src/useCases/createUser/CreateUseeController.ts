import { Request,Response } from "express";
import { CreateUsersUseCase } from "./CreateUsersUseCase";

class CreateUsersController{
    constructor(private createUserUseCase:CreateUsersUseCase){}

    async handle(request:Request,response: Response){

        const {name,email,idAdmin}=request.body;
        try {
            this.createUserUseCase.execute({name,email,idAdmin})
        } catch (err) {
            return response.status(400).json({ message: err.message || "unexpected error" });
        }

    }
}

export {CreateUsersController};