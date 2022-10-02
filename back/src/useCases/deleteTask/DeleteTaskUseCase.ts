import { ITasksRepository } from "../../repositories/ITasksRepository";
import { IDeleteTask } from "./IDeleteTask";

class DeleteTaskUseCase{
    constructor(private tasksRepository:ITasksRepository){}

    async execute({id}:IDeleteTask){
        const deleteTask = await this.tasksRepository.deleteTask(id);

        return deleteTask;
    }
}
export {DeleteTaskUseCase};