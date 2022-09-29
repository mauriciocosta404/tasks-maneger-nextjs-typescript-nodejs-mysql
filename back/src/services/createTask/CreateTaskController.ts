import { Request, Response } from "express";
import { CreateTaskUseCase } from "./CreateTasksUseCase";

class CreateTaskController {
    constructor(private createTaskUseCase: CreateTaskUseCase) { }

    async handle(request: Request, response: Response) {

        const { name,description,status,idUser } = request.body;
        try {
            this.createTaskUseCase.execute({ name, description, status,idUser});
        } catch (err) {
            return response.status(400).json({ message: err.message || "unexpected error" });
        }

    }
}

export { CreateTaskController };