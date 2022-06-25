import { Module } from '@nestjs/common';
import { UserDiaryService } from './user-diary.service';
import { UserDiaryController } from './user-diary.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserDiary, UserDiarySchema } from './user-diary.schema'
@Module({
  imports: [
    MongooseModule.forFeature([{name: UserDiary.name, schema: UserDiarySchema}]),
  ],
  controllers: [UserDiaryController],
  providers: [UserDiaryService]
})
export class UserDiaryModule {}
