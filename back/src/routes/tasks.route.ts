import { Router } from "express";
import { TaskRepository } from "../repositories/TasksRepository";
import { CreateTasksService } from "../services/CreateTasksService";


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

export {tasksRoute};