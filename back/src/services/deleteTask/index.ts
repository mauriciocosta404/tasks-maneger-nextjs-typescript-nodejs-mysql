import { TaskRepository } from "../../repositories/implements/TasksRepository"; 
import { DeleteTaskController } from "./DeleteTaskController"; 
import { DeleteTaskUseCase } from "./DeleteTaskUseCase"; 

const taskRepository = new TaskRepository();
const deleteTaskUseCase = new DeleteTaskUseCase(taskRepository);
const deleteTaskController = new DeleteTaskController(deleteTaskUseCase);

export { deleteTaskController };