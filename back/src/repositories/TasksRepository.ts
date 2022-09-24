import { connection } from "../db/connection";
import { Task } from "../model/Task";
import { ICreateTaskDTO, ITasksRepository } from "./ITasksRepository";

class TaskRepository implements ITasksRepository{

    private tasks:Task[];

    constructor(){
        this.getTasks();
    }

    getAllTasks(): Task[] {
        return this.tasks;
    }
    createTasks({ name, description, status, idUser }: ICreateTaskDTO): void {
        const task=new Task();

        Object.assign(task,{
            name,
            description,
            status,
            idUser
        });

        let SQL = 'INSERT INTO tasks(name,description,status,idUsers) values(?,?,?,?)';

        connection.query(SQL, [name, description, status,idUser], (err, result) => {

            this.getTasks();
        });
        
    }

    private getTasks() {
        let SQL = "SELECT * FROM tasks";

        connection.query(SQL, (err, result) => {
        
            this.tasks = result;
        })
    }

}
export {TaskRepository};