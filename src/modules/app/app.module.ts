import { Module } from '@nestjs/common';
import { AppController } from '../testModule/app.controller';
import { AppService } from '../testModule/app.service';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
// import { ConfigModule } from '../../config/config.module';
// import { ConfigService } from '../../config/config.service';
import { UserModule } from 'src/modules/user/user.module';
import configuration from 'src/config/configuration';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from "@nestjs/config";
import { UserDiaryModule } from '../user-diary/user-diary.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const options: MongooseModuleOptions = {
          uri: configService.get('DATABASE_URI'),
        };
        return options;
      },
      inject: [ConfigService],
    }),
    UserModule,
    UserDiaryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
