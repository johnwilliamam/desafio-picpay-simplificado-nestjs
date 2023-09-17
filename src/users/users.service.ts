import { IUser } from "./user.dto";
import { Users } from "./users.entity";
import { UsersRepository } from "./users.repository";

export class UsersService {
    constructor() { }
    async getAllUsers(): Promise<Users[]> {
        const allUsers = await UsersRepository.findAllUsers();
        return allUsers;
    }
    async createUser(user: IUser): Promise<Users> {
        const findByEmail = await UsersRepository.findByEmail(user.email)
        const findByDocument = await UsersRepository.findByDocument(user.document)

        if (findByEmail) throw new Error('Já existe um usuário cadastrado com esse e-mail')
        if (findByDocument) throw new Error('Já existe um usuário cadastrado com esse documento')
        const saveUser = await UsersRepository.createUser(user);
        return saveUser;
    }
    async findUserById(id: number) {
        const findUser = await UsersRepository.findUserById(id);
        console.log(findUser)
        return findUser
    }
    async saveUser(user: IUser) {
        return await UsersRepository.save(user);
    }
}