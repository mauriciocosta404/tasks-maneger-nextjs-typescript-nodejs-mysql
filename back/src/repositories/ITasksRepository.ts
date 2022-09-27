import { Task } from "../model/Task";

interface ICreateTaskDTO{
    name:string;
    description:string;
    status:string;
    idUser:number;
}

interface ITasksRepository{
    getAllTasks():Task[];
    createTasks({name,description,status,idUser}:ICreateTaskDTO):void;
    upDateStatus(id:number,status:string):void;
    deleteTask(id:number):void;
}
export {ITasksRepository,ICreateTaskDTO};