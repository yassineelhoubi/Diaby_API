import { IsString, IsInt, IsEmail, Length } from 'class-validator'

export class UserDiaryDto {
    @IsString()
    @Length(1, 255)
    userId: string;

    @IsString()
    @Length(1, 255)
    type: "insulin" | "pill" | "sugarLevel";

    @IsInt()
    value: number;

    @IsString()
    @Length(1, 255)
    notes: string;
}