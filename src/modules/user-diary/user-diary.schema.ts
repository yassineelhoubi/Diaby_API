import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class UserDiarySchema extends Document {
    @Prop({ required: true })
    userId: string;

    @Prop({ required: true })
    type: "insulin" | "pill" | "sugarLevel";

    @Prop({ required: true })
    value: number;

    @Prop({ required: true })
    notes: string;
}