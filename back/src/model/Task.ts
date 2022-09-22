import { randomUUID as uuidv4 } from 'crypto';

class Task{
    name: string;
    description:string;
    status:string;
    idUser:number;
    id: string;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Task };