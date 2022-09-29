import { TaskRepository } from "../../repositories/implements/TasksRepository";
import { UsersRepository } from "../../repositories/implements/UsersRepository";

class GetTaskUseCase {
    constructor(private tasksRepository: TaskRepository) { }

    async execute() {
        const allTasks = await this.tasksRepository.getAllTasks();

        return allTasks;
    }
}
export { GetTaskUseCase };