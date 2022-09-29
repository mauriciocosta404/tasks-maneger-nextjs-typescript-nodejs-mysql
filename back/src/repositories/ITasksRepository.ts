import { Task } from "../model/Task";

interface ICreateTaskDTO{
    name:string;
    description:string;
    status:string;
    idUser:string;
}

interface ITasksRepository{
    getAllTasks():Task[];
    createTasks({name,description,status,idUser}:ICreateTaskDTO):void;
    upDateStatus(id:string,status:string):void;
    deleteTask(id:string):string;
}
export {ITasksRepository,ICreateTaskDTO};