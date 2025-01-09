import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;


class EmailEntry {
  @Prop({ type: Types.ObjectId, auto: true })
  _id: Types.ObjectId;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true, default: 0 })
  count: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  position: string;

  @Prop({ required: true })
  signature: string;
}


@Schema({ timestamps: true, versionKey: false })
export class User {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  signature: string;

  @Prop({ required: true })
  position: string;

  @Prop({ type: [EmailEntry], default: [] })
  emailList: EmailEntry[];
}

export const UserSchema = SchemaFactory.createForClass(User);
