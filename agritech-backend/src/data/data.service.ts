// src/data/data.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SensorData, SensorDataDocument } from './schemas/sensor-data.schema';

@Injectable()
export class DataService {
  constructor(
    @InjectModel(SensorData.name)
    private sensorDataModel: Model<SensorDataDocument>,
  ) {}

  async saveSensorData(data: {
    sensorId: string;
    temperature: number;
    humidity: number;
    lightIntensity: number;
  }): Promise<SensorData> {
    const createdData = new this.sensorDataModel(data);
    return createdData.save();
  }

  async getLatestSensorData(): Promise<SensorData> {
    return this.sensorDataModel.findOne().sort({ timestamp: -1 }).exec();
  }



//async getHistoricalSensorData() {
  //     // Adjust the query to fit your needs (e.g., time range, aggregation)
  //     return this.sensorDataModel.find().sort({ timestamp: -1 }).exec();
  //   }
}
