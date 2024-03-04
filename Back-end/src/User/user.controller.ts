import { Body, Controller, Get, Param, Post, Put} from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./schema/user-schema";

@Controller('user')

export class UserController{

    constructor(private userService:UserService){}


    @Get()
    async getAll(){
        return await this.userService.getAll();
        
    }

    @Post()
    async create(@Body() user:User){
        return await this.userService.create(user);
    }

    @Get("/:id")
    async getById(@Param('id') id:string){
        return await this.userService.getById(id);

    }

    @Put("/:id")
    async update(@Param('id') id:string, @Body() user:User){
        return await this.userService.update(id, user);

    }
}