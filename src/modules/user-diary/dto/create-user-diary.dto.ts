import { UserDiaryDto } from "./user-diary.dto";
import { OmitType, PartialType } from '@nestjs/mapped-types';

export class CreateUserDiaryDto extends OmitType(UserDiaryDto, ['userId']) { }
