import { Router, Request } from 'express';
import { TaskRepository } from "../repositories/implements/TasksRepository";
import { createTaskController } from '../services/createTask';
import { deleteTaskController } from '../services/deleteTask';
import { getTasksController } from '../services/getTasks';
import { upDateStatusController } from '../services/upDateTask';

const tasksRoute=Router();

tasksRoute.post('/', (request, response) => {
    createTaskController.handle(request,response);
});

tasksRoute.get('/',(request,response)=>{
    getTasksController.handle(request,response);
});

tasksRoute.put('/', (request, response)=>{
    upDateStatusController.handle(request,response);
});

tasksRoute.delete('/:id',(request,response)=>{
    deleteTaskController.handle(request,response);
})

export {tasksRoute};