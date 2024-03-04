import { Injectable } from "@nestjs/common"; 
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./schema/user-schema";
import { Model } from 'mongoose';


@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel : Model<UserDocument>){}

    async getAll(){
        return await this.userModel.find().exec();
    }

    async create(user:User){
        const newUser = new this.userModel(user);
        await newUser.save();
    }

    async getById(id:string){
        return await this.userModel.findById(id).exec();

    }

    async update(id:string, user:User){
        return await this.userModel.findByIdAndUpdate(id, user,{
            new:true
        });
    }
}
