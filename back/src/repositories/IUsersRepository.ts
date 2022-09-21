import { User } from "../model/User";

export interface IUsersRepository {
    save(user: User): Promise<User>;
    findByEmail(email: string): boolean;
    getUsers():User[];
}