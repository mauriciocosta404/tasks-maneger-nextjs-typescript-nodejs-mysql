import { TaskRepository } from "../../repositories/implements/TasksRepository";
import { GetUsersController } from "../getUsers/getUsersController";
import { GetTasksController } from "./GetTasksController";
import { GetTaskUseCase } from "./GetTasksUseCase";

const tasksRepository = new TaskRepository();
const getTasksUseCase = new GetTaskUseCase(tasksRepository);
const getTasksController = new GetTasksController(getTasksUseCase);

export { getTasksController };