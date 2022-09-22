import { randomUUID as uuidv4 } from 'crypto';
import { Task } from './Task';

class User{
    name:string;
    email:string;
    password:string;
    id?:string;

    constructor(){
        if(!this.id){
            this.id=uuidv4();
        }
    }
}

export {User};