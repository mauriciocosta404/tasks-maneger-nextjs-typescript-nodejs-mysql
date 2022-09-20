import { Response,Request } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';
export class CreateUserController{

    constructor (private createUserUseCase:CreateUserUseCase){}

    async handle(request:Request,response:Response):Promise<Response>{
        const {name,email,password}=request.body;
        
        try{
            const user=await this.createUserUseCase.execute({name,email,password});

            return response.send({message:'user created'});
        }catch(err){
                return response.status(404).json({
                message: err.message || "unespected error", 
            });
        }
    }
}