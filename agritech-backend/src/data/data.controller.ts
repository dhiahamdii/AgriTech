// src/data/data.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Post()
  async handleData(
    @Body()
    data: {
      sensorId: string;
      temperature: number;
      humidity: number;
      lightIntensity: number;
      timestamp: string; // Add timestamp field

    },
  ) {
    console.log('Received data:', data);
    const savedData = await this.dataService.saveSensorData(data); // Save the data to MongoDB
    return { status: 'success', data: savedData };
  }

  @Get()
  async getData() {
    const latestData = await this.dataService.getLatestSensorData();
    return latestData || { message: 'No data available' }; // Return the latest data from MongoDB
  }





  // New endpoint for historical data
  // @Get('history')
  //   async getHistoricalData() {
  //     const historicalData = await this.dataService.getHistoricalSensorData();
  //     return historicalData || { message: 'No historical data available' };
  //   }





}
