import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from 'mongoose';
@Schema({ timestamps: true })
export class UserDiary extends Document {
    @Prop({ required: true,type: mongoose.Schema.Types.ObjectId, ref: 'User'  })
    userId: string;

    @Prop({ required: true })
    type: "insulin" | "pill" | "sugarLevel";

    @Prop({ required: true })
    value: number;


    @Prop()
    notes: string;
}

export const UserDiarySchema = SchemaFactory.createForClass(UserDiary);