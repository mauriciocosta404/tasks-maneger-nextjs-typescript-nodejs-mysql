import { Request,Response } from 'express';
import { DeleteTaskUseCase } from './DeleteTaskUseCase';
class DeleteTaskController{
    constructor(private deleteTaskUseCase:DeleteTaskUseCase){}

    async handle(request:Request, response: Response){    

        const { id } = request.params;
        try {
            const deleteTask= await this.deleteTaskUseCase.execute({id});
            return response.json(deleteTask);

        } catch (error) {
            return response.status(400).json({message:error.message || "unexpected error"});
        }
    }
}
export {DeleteTaskController};