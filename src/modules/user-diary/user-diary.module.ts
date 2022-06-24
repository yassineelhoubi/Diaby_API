import { Module } from '@nestjs/common';
import { UserDiaryService } from './user-diary.service';
import { UserDiaryController } from './user-diary.controller';

@Module({
  controllers: [UserDiaryController],
  providers: [UserDiaryService]
})
export class UserDiaryModule {}
