import { ITasksRepository } from "../repositories/ITasksRepository";
import { ICreateTasks } from "./ICreateTasks";

class CreateTasksService{
    constructor(private tasksRepository:ITasksRepository){}

    execute({name,description,status,idUser}:ICreateTasks){
        this.tasksRepository.createTasks({ name, description, status,idUser});
    }
}
export {CreateTasksService};