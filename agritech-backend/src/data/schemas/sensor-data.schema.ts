// src/data/schemas/sensor-data.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Sensor } from '../../sensors/schemas/sensor.schema';

export type SensorDataDocument = SensorData & Document;

@Schema()
export class SensorData {
  @Prop({ type: Types.ObjectId, ref: Sensor.name, required: true })
  sensorId: Types.ObjectId;

  @Prop()
  temperature: number;

  @Prop()
  humidity: number;

  @Prop()
  lightIntensity: number;

  @Prop({ default: Date.now })
  timestamp: Date;
}

export const SensorDataSchema = SchemaFactory.createForClass(SensorData);
