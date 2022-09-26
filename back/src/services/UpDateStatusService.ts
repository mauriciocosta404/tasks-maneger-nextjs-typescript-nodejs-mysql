import { ITasksRepository } from "../repositories/ITasksRepository";
import { TaskRepository } from "../repositories/implements/TasksRepository";
import { IUpDateStatus } from "./IUpDateStatusService";

class UpDataStatus{
    constructor(private taskRepository:ITasksRepository){}

    execute({id,status}:IUpDateStatus){
        this.taskRepository.upDateStatus(id,status);
    }
}
export {UpDataStatus};