import { Router, Request } from 'express';
import { TaskRepository } from "../repositories/implements/TasksRepository";
import { createTaskController } from '../services/createTask';
import { deleteTaskController } from '../services/deleteTask';
import { UpDataStatus } from "../services/upDateTask/UpDateStatusService";

const tasksRoute=Router();
const tasksRepository=new TaskRepository();


tasksRoute.post('/', (request, response) => {
    createTaskController.handle(request,response);
});

tasksRoute.get('/',(request,response)=>{
    const allTasks=tasksRepository.getAllTasks();

    return response.json(allTasks);
});

tasksRoute.put('/', (request, response)=>{
    const {id,status}=request.body;
    const upDateStatus=new UpDataStatus(tasksRepository);

    upDateStatus.execute({id,status});
    return response.json('task updated');
});


tasksRoute.delete('/:id',(request,response)=>{
    deleteTaskController.handle(request,response);
})

export {tasksRoute};