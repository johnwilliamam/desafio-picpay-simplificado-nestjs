import { Body, Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller()
export class UsersController {
    constructor(private userService: UsersService) { }
    @Get('/users')
    async findAll(){
        return await this.userService.getAllUsers()
    }
    async createUser(@Body() user){
        return await this.userService.createUser(user)
    }
}