import { TaskRepository } from "../../repositories/implements/TasksRepository";
import { CreateTaskController } from "./CreateTaskController";
import { CreateTaskUseCase } from "./CreateTasksUseCase";

const taskRepository = new TaskRepository();
const createTaskUseCase = new CreateTaskUseCase(taskRepository)
const createTaskController = new CreateTaskController(createTaskUseCase)

export { createTaskController };