import { connection } from "../../db/connection";
import { User } from "../../model/User";
import { IUsersRepository } from "../IUsersRapository";

class UsersRepository implements IUsersRepository{

    private users:User[];

    constructor(){
        this.getUsers();
    }

    findByEmail(email: string): boolean {

        const verifyIfExists=this.users?.some((user)=>user.email===email);
        return verifyIfExists;
    }
    
    create({ name, email, idAdmin }: User): void {
        const user=new User();
        
        Object.assign(user,{
            name,
            email,
            idAdmin
        });

        let SQL='INSERT INTO users(id,name,email) values(?,?,?)';

        connection.query(SQL,[user.id,user.name,user.email,/*user.idAdmin*/],(err,result)=>{
            this.getUsers();
        });
    }

    list(): User[] {
        this.getUsers();

        return this.users;
    }

    private getUsers(){
        let SQL = "SELECT * FROM users";

        connection.query(SQL, (err, result) => {
            this.users = result;
        })
    }
}
export {UsersRepository};