import { Module } from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { InstructorController } from './instructor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Instructor, InstructorSchema } from './schema/instructor.model';
import { MockInterview, MockInterviewSchema } from 'src/services/mock-interview/schema/mock-interview.model';
import { JwtService } from 'jwt/jwt.service';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Instructor.name, schema: InstructorSchema },
      { name: MockInterview.name, schema: MockInterviewSchema },
    ]),
  ],
  controllers: [InstructorController],
  providers: [InstructorService, JwtService],
  exports: [InstructorService],
})
export class InstructorModule {}
