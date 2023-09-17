import { Body, Controller, Post } from "@nestjs/common";
import { TransactionsService } from "./transactions.service";

@Controller()
export class TransactionController {
    constructor(private transactionsService: TransactionsService) { }
    @Post('/transactions')
    async CreateTransaction(@Body() transaction){
        return await this.transactionsService.createTransaction(transaction)
    }
}