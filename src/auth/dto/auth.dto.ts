import { IsString, IsInt } from 'class-validator'

export class UserDto {
    @IsString()
    fName: string;
    