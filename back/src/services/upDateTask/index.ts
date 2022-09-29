import { TaskRepository } from "../../repositories/implements/TasksRepository";
import { UpDateStatusController } from "./UpDateStatusController";
import { UpDateStatusUseCase } from "./UpDateStatusUseCase";

const taskRepository= new TaskRepository();
const updateStatusUseCase=new UpDateStatusUseCase(taskRepository);
const upDateStatusController= new UpDateStatusController(updateStatusUseCase);

export {upDateStatusController};