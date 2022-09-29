import { ITasksRepository } from "../../repositories/ITasksRepository";
import { ICreateTaskDTO } from "./ICreateTasksDTO";

class CreateTaskUseCase {
    constructor(private tasksRepository: ITasksRepository) { }

    async execute({ name,description,status,idUser }: ICreateTaskDTO) {

        this.tasksRepository.createTasks({ name, description,status,idUser});
    }
}
export { CreateTaskUseCase };