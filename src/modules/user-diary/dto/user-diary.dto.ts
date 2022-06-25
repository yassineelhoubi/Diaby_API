import { IsString, IsInt, IsEmail, Length, maxLength } from 'class-validator'

export class UserDiaryDto {
    @IsString()
    @Length(1, 255)
    userId: string;

    @IsString()
    type: "insulin" | "pill" | "sugarLevel";

    @IsInt()
    value: number;

    // @IsString()
    notes: string;
}