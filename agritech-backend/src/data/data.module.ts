// src/data/data.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DataService } from './data.service';
import { DataController } from './data.controller';
import { SensorData, SensorDataSchema } from './schemas/sensor-data.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SensorData.name, schema: SensorDataSchema },
    ]),
  ],
  providers: [DataService],
  controllers: [DataController],
})
export class DataModule {}
