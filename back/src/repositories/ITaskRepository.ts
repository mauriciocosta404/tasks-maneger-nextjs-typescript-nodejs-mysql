import { Task } from "../model/Task";

export interface ITaskRepository{
    save(task:Task):Promise<Task>;
}