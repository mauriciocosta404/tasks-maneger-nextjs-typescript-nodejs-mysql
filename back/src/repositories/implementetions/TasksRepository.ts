import { Task } from '../../model/Task';
import { ITaskRepository } from '../ITaskRepository';

class TasksRepository implements ITaskRepository{
    private TasksRepository:Task[];

    constructor(){
        this.TasksRepository=[];
    }

    async save(task: Task): Promise<Task> {

        this.TasksRepository.push(task);
        return task;    
    }
    
}
export {TasksRepository};