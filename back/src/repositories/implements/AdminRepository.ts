import { connection } from "../../db/connection";
import { Admin } from "../../model/Admin";
import { IAdminRepository } from "../IAdminRepository";

class AdminRepository implements IAdminRepository{

    private admins:Admin[];

    constructor(){
        this.getAdmins();
    }

    getAdmin(): Admin[] {
        return this.admins;
    }

    verifyIfExists(email: string): Admin {

        const adminExists= this.admins.find((admin)=>admin.email===email);

        return adminExists;
    }

    private getAdmins(){
        let SQL = 'SELECT * FROM admin';

        connection.query(SQL,(err,result)=>{
            this.admins= result;
        });
    }
}
export {AdminRepository}