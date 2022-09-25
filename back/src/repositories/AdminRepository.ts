import { connection } from "../db/connection";
import { Admin } from "../model/Admin";
import { IAdminRepository } from "./IAdminRepository";

class AdminRepository implements IAdminRepository{

    private admins:Admin[];

    constructor(){
        this.admins=[];
    }

    getAdmin(): Admin[] {
        return this.admins;
    }
    private getAdmins(){
        let SQL = 'SELECT * FROM admin';

        connection.query(SQL,(err,result)=>{
            this.admins= result;
        });
    }
}