import { Router, Request } from 'express';
import { createTaskController } from '../useCases/createTask';
import { deleteTaskController } from '../useCases/deleteTask';
import { getTasksController } from '../useCases/getTasks';
import { upDateStatusController } from '../useCases/upDateTask';

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