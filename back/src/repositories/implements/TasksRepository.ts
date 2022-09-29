import { connection } from "../../db/connection";
import { Task } from "../../model/Task";
import { ICreateTaskDTO, ITasksRepository } from "../ITasksRepository";

class TaskRepository implements ITasksRepository{

    private tasks:Task[];

    constructor(){
        this.getTasks();
    }

    getAllTasks(): Task[] {
        return this.tasks;
    }
    createTasks({ id,name, description, status, idUser }: ICreateTaskDTO): void {
        const task=new Task();

        Object.assign(task,{
            name,
            description,
            status,
            idUser
        });

        let SQL = 'INSERT INTO tasks(id,name,description,status,idUsers) values(?,?,?,?,?)';

        connection.query(SQL, [id,name, description, status,idUser], (err, result) => {

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
        let id=Number(idUser);

        connection.query(SQL,[id],(err,result)=>{ 
            this.getTasks();
        });

        return 'deleted';
    }

    private getTasks() {
        let SQL = "SELECT * FROM tasks";

        connection.query(SQL, (err, result) => {
            console.log(result);
            this.getAllTasks();
        this.tasks = result;
        })
    }

}
export {TaskRepository};