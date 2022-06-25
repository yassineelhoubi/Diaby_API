import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDiaryDto } from './create-user-diary.dto';

export class UpdateUserDiaryDto extends PartialType(CreateUserDiaryDto) {}
