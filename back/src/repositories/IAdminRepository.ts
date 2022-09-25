import { Admin } from "../model/Admin";

interface IAdminRepository{
    getAdmin():Admin[];
}

export { IAdminRepository};