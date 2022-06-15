import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
    @Prop({ required: true })
    fName: string;

    @Prop({ required: true })
    lName: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop()
    phone: string;

    @Prop({ required: true })
    diabetesType: 'A' | 'B';

    @Prop({ required: true })
    patientCode: string;

    @Prop()
    weight: number;

    @Prop()
    diet: string;

    @Prop()
    otherInfo: string[];

}

export const UserSchema = SchemaFactory.createForClass(User);