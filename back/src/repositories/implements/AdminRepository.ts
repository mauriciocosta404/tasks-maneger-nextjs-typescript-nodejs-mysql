import { connection } from "../../db/connection";
import { Admin } from "../../model/Admin";
import { IAdminRepository } from "../IAdminRepository";

class AdminRepository implements IAdminRepository{

    private admins:Admin[];
    private static INSTANCE: AdminRepository;

    constructor(){
        this.getAdmins();
    }

    public static getINSTANCE(): AdminRepository {
        if (!AdminRepository.INSTANCE)
            AdminRepository.INSTANCE = new AdminRepository();

        return AdminRepository.INSTANCE;
    }

    getAdmin(): Admin[] {
        return this.admins;
    }

    verifyIfExists(email: string): Admin | undefined {

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