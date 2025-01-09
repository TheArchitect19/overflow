import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type MockInterviewDocument = MockInterview & Document;

export enum Status {
    REQUESTED = 'Requested',
    ACCEPTED  = 'Accepted',
    REJECTED  = 'Rejected'
}

@Schema({ timestamps: true, versionKey: false })
export class MockInterview {
    @Prop({ required: true })
    user: string;
  
    @Prop({ required: true })
    instructor: string;
  
    @Prop({ required: true, enum: Status })
    status: Status;

}

export const MockInterviewSchema = SchemaFactory.createForClass(MockInterview);
