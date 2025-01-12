import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  batch: string;

  @Prop({ required: true })
  college: string;

  @Prop()
  bio?: string;

  @Prop()
  linkedinProfile?: string;

  @Prop()
  profileImage?: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: [{ type: String }] }) // Stores mock interview request IDs
  mockInterviewRequests: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
