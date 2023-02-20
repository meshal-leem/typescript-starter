import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from '../../auth/schemas/user.schema';

@Schema({
  timestamps: true,
})
export class Product {
  @Prop({ required: true })
  name: String;

  @Prop({ required: true })
  description: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ required: true })
  url_of: String;

  @Prop({ required: true })
  url_od: String;

  @Prop({ required: true })
  url_os: String;

  @Prop({ required: true })
  url_ob: String;

  @Prop({ required: true })
  url_video: String;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
