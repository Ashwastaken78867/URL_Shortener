// src/url/url.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { User } from '../auth/user.schema';

export type UrlDocument = Url & Document;

@Schema({ timestamps: true })
export class Url {
  @Prop({ required: true })
  url: string;

  @Prop({ required: true, unique: true })
  shortCode: string;

  @Prop({ default: 0 })
  clicks: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' }) // 👈 associate with User
  user: MongooseSchema.Types.ObjectId;
  createdAt: any;
}

export const UrlSchema = SchemaFactory.createForClass(Url);
