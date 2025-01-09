import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './instructor/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MockInterviewModule } from './services/mock-interview/mock-interview.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV ? `.${process.env.NODE_ENV}.env` : '.env',
    }),
    MongooseModule.forRoot(`${process.env.MONGO_URI}/${process.env.DB_NAME}`),
    AuthModule,
    UserModule,
    MockInterviewModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
