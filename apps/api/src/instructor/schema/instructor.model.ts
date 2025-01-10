import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Instructor extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  currentCompany: string;

  @Prop({ required: true })
  bio: string;

  @Prop({ required: true })
  calendlyLink: string;

  @Prop({ required: true, unique: true })
  orgEmail: string;

  @Prop({ required: true })
  password: string;
}

export const InstructorSchema = SchemaFactory.createForClass(Instructor);
