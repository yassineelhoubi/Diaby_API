import { Injectable } from '@nestjs/common';
import { CreateUserDiaryDto } from './dto/create-user-diary.dto';
import { UpdateUserDiaryDto } from './dto/update-user-diary.dto';

@Injectable()
export class UserDiaryService {
  create(createUserDiaryDto: CreateUserDiaryDto) {
    return 'This action adds a new userDiary';
  }

  findAll() {
    return `This action returns all userDiary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userDiary`;
  }

  update(id: number, updateUserDiaryDto: UpdateUserDiaryDto) {
    return `This action updates a #${id} userDiary`;
  }

  remove(id: number) {
    return `This action removes a #${id} userDiary`;
  }
}
