import { Request, Response } from 'express';
import { UpDateStatusUseCase } from './UpDateStatusUseCase';
class UpDateStatusController{
    constructor(private updateStatusUseCase:UpDateStatusUseCase){}

    async handle(request:Request,response: Response){
        const {id,status}=request.body;

        try {
            this.updateStatusUseCase.execute({id,status});
        } catch (err) {
            return response.status(400).json({ message: err.message || "unexpected"});
        }
    }
}
export {UpDateStatusController}