import { Request,Response } from 'express';
import { DeleteTaskUseCase } from './DeleteTaskUseCase';
class DeleteTaskController{
    constructor(private deleteTaskUseCase:DeleteTaskUseCase){}

    handle(request:Request, response: Response){    

        const { id } = request.body;

        try {
            this.deleteTaskUseCase.execute({id});
            
        } catch (error) {
            return response.status(400).json({message:error.message || "unexpected error"})
        }
    }
}
export {DeleteTaskController};