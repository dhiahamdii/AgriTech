// src/sensors/schemas/sensor.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SensorDocument = Sensor & Document;

@Schema()
export class Sensor {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  location: string;

  @Prop({ default: true })
  isActive: boolean;
}

export const SensorSchema = SchemaFactory.createForClass(Sensor);
