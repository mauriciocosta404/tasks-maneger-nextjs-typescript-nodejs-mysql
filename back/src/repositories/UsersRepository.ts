import { connection } from "../db/connection";
import { User } from "../model/User";
import { IUsersRepository } from "./IUsersRapository";

class UsersRepository implements IUsersRepository{

    private users:User[];

    constructor(){
        this.getUsers();
    }

    findByEmail(email: string): boolean {
        const verifyIfExists=this.users.some((user)=>user.email===email);

        return verifyIfExists;
    }
    create({ name, email, password }: User): void {
        const user=new User();
        
        Object.assign(user,{
            name,
            email,
            password
        });

        let SQL='INSERT INTO users(name,email,password) values(?,?,?)';

        connection.query(SQL,[name,email,password],(err,result)=>{
            console.log(err);
        });
        this.getUsers();
    }
    list(): User[] {
       return this.users;
    }
    private getUsers(){
        let SQL = "SELECT * FROM users";

        connection.query(SQL, (err, result) => {
            err ? console.log(err) : console.log(result);
            this.users = result;
        })
    }
}
export {UsersRepository};