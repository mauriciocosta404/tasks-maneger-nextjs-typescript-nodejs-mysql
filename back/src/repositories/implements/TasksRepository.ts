import { connection } from "../../db/connection";
import { Task } from "../../model/Task";
import { ICreateTaskDTO, ITasksRepository } from "../ITasksRepository";

class TaskRepository implements ITasksRepository{

    private tasks:Task[];

    constructor(){
        this.getTasks();
    }

    getAllTasks(): Task[] {
        this.getTasks();
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

        let SQL = 'INSERT INTO tasks(id,name,description,status,idUsers) values(?,?,?,?,?)';

        connection.query(SQL, [task.id,task.name, task.description, task.status,task.idUser], (err, result) => {
            this.getTasks();
        });  
    }

    upDateStatus(id:string,status:string) {
        let SQL = 'UPDATE tasks set status=? WHERE id=?';

        connection.query(SQL, [status,id], (err, result) => { 
            this.getTasks();
        });  
    }

    deleteTask(idUser: string):string{
        let SQL="DELETE FROM tasks WHERE id=?";

        connection.query(SQL,[idUser],(err,result)=>{ 
            this.getTasks();
        });

        return 'deleted';
    }

    private getTasks() {
        let SQL = "SELECT * FROM tasks";

        connection.query(SQL, (err, result) => {
            this.tasks = result;
        });
    }

}
export {TaskRepository};