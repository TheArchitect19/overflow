// mock-interview.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MockInterviewService } from './mock-interview.service';
import { MockInterviewController } from './mock-interview.controller';
import { MockInterview, MockInterviewSchema } from './schema/mock-interview.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: MockInterview.name, schema: MockInterviewSchema }]),
  ],
  controllers: [MockInterviewController],
  providers: [MockInterviewService],
  exports: [MockInterviewService], // Exporting service if needed in other modules
})
export class MockInterviewModule {}
