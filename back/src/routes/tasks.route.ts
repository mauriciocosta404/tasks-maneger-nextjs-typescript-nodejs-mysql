import { Router } from "express";
import { TaskRepository } from "../repositories/implements/TasksRepository";
import { CreateTasksService } from "../services/CreateTasksService";
import { UpDataStatus } from "../services/UpDateStatusService";


const tasksRoute=Router();
const tasksRepository=new TaskRepository();


tasksRoute.post('/', (request, response) => {
    const {name,description,status,idUser}=request.body;
    const createTasksServie=new CreateTasksService(tasksRepository);

    createTasksServie.execute({name,description, status,idUser});
    return response.json({message:'created'});
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

export {tasksRoute};