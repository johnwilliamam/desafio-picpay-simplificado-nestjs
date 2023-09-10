import { AppDataSource } from "../config/datasource";
import { Transactions } from "./transaction.entity";

export const TransactionRepository = AppDataSource.getRepository(Transactions).extend({
    async createTransaction(transaction: string): Promise<Transactions> {
        return
    },
})