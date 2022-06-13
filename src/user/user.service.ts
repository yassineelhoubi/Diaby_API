import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import * as argon from 'argon2';
import console from 'console';
@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly authService: AuthService,
  ) { }

  async create(createUserDto: CreateUserDto) {
    try {

      const user = await this.userModel.findOne({ email: createUserDto.email });
      if (user) throw new Error('Email already exists');

      // hash the password
      const password = await argon.hash(createUserDto.password);

      // create the user
      const createdUser = new this.userModel({
        ...createUserDto,
        password,
      });

      await createdUser.save();

      if (!createdUser) throw new Error('Failed to create user');

      // create the token
      const token = await this.authService.createToken(createdUser, 'USER');

      return { token, user };

    }
    catch (error) {
      return { error: error.message };
    }

  }

  async login(loginUserDto: CreateUserDto) {

    try {

      const errors = {
        email: 'Email not found',
        password: 'Password is incorrect',
      };
      const { email, password } = loginUserDto;

      // check the email provided
      const user = await this.userModel.findOne({ email });

      if (!user) throw new Error(errors.email);

      // check the password provided
      if (user.password !== password) throw new Error(errors.password);

      // create the token
      const token = await this.authService.createToken(user, 'USER');

      return { token, user };

    } catch (error) {
      return { error: error.message };
    }

  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
