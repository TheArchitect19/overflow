import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.model';
import { JwtService } from 'jwt/jwt.service';
import { MockInterviewModule } from 'src/services/mock-interview/mock-interview.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MockInterviewModule
  ],
  controllers: [UserController],
  providers: [UserService, JwtService],
  exports: [MongooseModule],
})
export class UserModule {}
