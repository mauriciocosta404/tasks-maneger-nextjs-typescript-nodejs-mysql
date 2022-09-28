import { connection } from "../../db/connection";
import { Task } from "../../model/Task";
import { ICreateTaskDTO, ITasksRepository } from "../ITasksRepository";

class TaskRepository implements ITasksRepository{

    private tasks:Task[];

    constructor(){
        this.getTasks();
    }Us

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
    upDateStatus(id:number,status:string) {

        let SQL = 'UPDATE tasks set status=? WHERE id=?';

        connection.query(SQL, [status,id], (err, result) => {
            console.log(err);   
            this.getTasks();
        });  
    }
    deleteTask(id: number):string{
        const SQL="DELETE FROM tasks WHERE id=?";

        connection.query(SQL,[id],(err,result)=>{
            console.log(err);
            this.getAllTasks();
        });
        return 'deleted';
    }

    private getTasks() {
        let SQL = "SELECT * FROM tasks";

        connection.query(SQL, (err, result) => {
            console.log(err);
            this.getAllTasks();
        this.tasks = result;
        })
    }

}
export {TaskRepository};