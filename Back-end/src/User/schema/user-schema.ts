
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Document} from 'mongoose'



export type UserDocument = User & Document;

@Schema({collection : 'user'})
export class User {

    @Prop()
    firstname : string;

    @Prop()
    lastname : string;

    @Prop()
    email : string;

    @Prop()
    mobileno : number;

    @Prop()
    optional : string;
 
}

export const UserSchema = SchemaFactory.createForClass(User);