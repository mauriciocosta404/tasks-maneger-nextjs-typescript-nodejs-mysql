import { Admin } from "../model/Admin";

interface IAdminRepository{
    getAdmin():Admin[];
    verifyIfExists(email:string):Admin;
}

export { IAdminRepository};