import { ITasksRepository } from "../../repositories/ITasksRepository";
import { IDeleteTask } from "./IDeleteTask";

class DeleteTaskUseCase{
    constructor(private tasksRepository:ITasksRepository){}

    execute({id}:IDeleteTask){
        
    }
}
export {DeleteTaskUseCase};