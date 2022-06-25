import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UserDiaryService } from './user-diary.service';
import { CreateUserDiaryDto } from './dto/create-user-diary.dto';
import { UpdateUserDiaryDto } from './dto/update-user-diary.dto';
import { Role } from 'src/helpers/decorators/role.decorator';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { UseGuards } from '@nestjs/common';

@Controller('user-diary')
export class UserDiaryController {
  constructor(private readonly userDiaryService: UserDiaryService) {}

  @Post()
  create(@Body() createUserDiaryDto: CreateUserDiaryDto) {
    return this.userDiaryService.create(createUserDiaryDto);
  }

  @Get()
  findAll() {
    return this.userDiaryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userDiaryService.findOne(+id);
  }

  @Role("USER")
  @UseGuards(JwtGuard)
  @Get('getAllByType/query')
  getAllByQueryString(@Query() query: any) {
    return this.userDiaryService.getAllByQueryString(query);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDiaryDto: UpdateUserDiaryDto) {
    return this.userDiaryService.update(+id, updateUserDiaryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userDiaryService.remove(+id);
  }
}
