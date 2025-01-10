import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { InstructorModule } from './instructor/instructor.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MockInterviewModule } from './services/mock-interview/mock-interview.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV ? `.${process.env.NODE_ENV}.env` : '.env',
    }),
    MongooseModule.forRoot(`${process.env.MONGO_URI}/${process.env.DB_NAME}`),
    AuthModule,
    InstructorModule,
    MockInterviewModule,
    JwtModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
