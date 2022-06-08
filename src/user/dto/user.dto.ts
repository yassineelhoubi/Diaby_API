import { IsString, IsInt } from 'class-validator'

export class UserDto {
    @IsString()
    fName: string;

    @IsString()
    lName: string;

    @IsString()
    email: string;

    @IsString()
    password: string;

}