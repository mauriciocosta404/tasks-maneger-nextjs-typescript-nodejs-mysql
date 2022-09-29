import { Response, Request } from "express";
import { GetTaskUseCase } from "./GetTasksUseCase";

class GetTasksController {
    constructor(private getUsersUseCase: GetTaskUseCase) { }

    async handle(request: Request, response: Response) {

        try {
            const allTasks = await this.getUsersUseCase.execute();

            return response.json(allTasks);
        } catch (error) {
            return response.status(400).json({ message: error.message || "unexpected" });
        }
    }
}
export { GetTasksController }