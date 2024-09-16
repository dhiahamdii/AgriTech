// src/sensors/sensors.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SensorsService } from './sensors.service';
import { SensorsController } from './sensors.controller';
import { Sensor, SensorSchema } from './schemas/sensor.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sensor.name, schema: SensorSchema }]),
  ],
  providers: [SensorsService],
  controllers: [SensorsController],
})
export class SensorsModule {}
