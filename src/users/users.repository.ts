import { AppDataSource } from "src/config/datasource";
import { UserType } from "src/types/User.type";
import { IUser } from "./user.dto";
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
    async createUser(user: IUser): Promise<Users> {
        const typeReq = user.type as keyof typeof UserType;
        const userType = UserType[typeReq];
        user.type = userType
        try {
            console.log('SAVE')
            const newUser = await this.create(user)
            newUser.save()
            return newUser;
        } catch (err) {
            console.log(err)
            throw new Error('Erro ao cadastrar usuário')
        }
    },
    async updateUser(data: IUser, userId: number): Promise<Users>{
        const user = await this.findOneByOrFail({ id: userId });
        user.firstName = data?.firstName;
        user.lastName = data?.lastName;
        user.balance = data?.balance
        user.document = data?.document
        user.email = data?.email
        try{
            await user.save();
            return user
        }catch(err){
            console.log(err)
            throw new Error('Erro ao atualizar usuário')
        }
    }
})