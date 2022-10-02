import { ITasksRepository } from "../../repositories/ITasksRepository";
import { TaskRepository } from "../../repositories/implements/TasksRepository";
import { IUpDateStatus } from "./IUpDateStatusService";

class UpDateStatusUseCase{
    constructor(private taskRepository:ITasksRepository){}

    async execute({id,status}:IUpDateStatus){
        this.taskRepository.upDateStatus(id,status);
    }
}
export {UpDateStatusUseCase};