import {randomUUID as uuidv4} from 'crypto';

class Admin{
    id: string;
    name: string;
    email: string;
    password:string;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Admin };