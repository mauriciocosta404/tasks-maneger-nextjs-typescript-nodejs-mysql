import {randomUUID as uuidv4} from 'crypto';

class Admin{
    name: string;
    email: string;
    password:string;
    id: string;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { Admin };