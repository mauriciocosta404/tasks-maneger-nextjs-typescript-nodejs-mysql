import { Task } from "../model/Task";

interface ICreateTaskDTO{
    id: string;
    name:string;
    description:string;
    status:string;
    idUser:number;
}

interface ITasksRepository{
    getAllTasks():Task[];
    createTasks({id,name,description,status,idUser}:ICreateTaskDTO):void;
    upDateStatus(id:string,status:string):void;
    deleteTask(id:string):string;
}
export {ITasksRepository,ICreateTaskDTO};