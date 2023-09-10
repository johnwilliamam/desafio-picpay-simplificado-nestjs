import { AppDataSource } from "src/config/datasource";
import { Users } from "./users.entity";

export const UsersRepository = AppDataSource.getRepository(Users).extend({
    async findAllUsers(): Promise<Users[]> {
        return await this.find()
    },
    async findUserById(id: number): Promise<Users>{
        return await this.findOne({where : id})
    },
    async findByEmail(email: string): Promise<Users>{
        const user = await this.findOne({where: {email : email}})
        return user
    },
    async findByDocument(document: string){
        const user = await this.findOne({where: {document: document}})
        return user
    },
     async createUser() {
        return 
     },
     async updateUser(){
        return
     }
})