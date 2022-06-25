import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDiaryDto } from './dto/create-user-diary.dto';
import { UpdateUserDiaryDto } from './dto/update-user-diary.dto';
import { Model } from 'mongoose';
import { UserDiary } from './user-diary.schema';

@Injectable()
export class UserDiaryService {

  constructor(
    @InjectModel(UserDiary.name) private readonly userDiaryModel: Model<UserDiary>
  ) { }

  create(createUserDiaryDto: CreateUserDiaryDto, user: any) {

    try {
      const createdUserDiary = new this.userDiaryModel({...createUserDiaryDto, userId: user._id});
      return createdUserDiary.save();
    } catch (error) {
      return { error: error.message };
    }

  }

  getAllByQueryString(query: any) {
    try {
      return this.userDiaryModel.find(query);
    }catch(error){
      return { error: error.message };
    }
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
