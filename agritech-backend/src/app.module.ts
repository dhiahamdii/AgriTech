import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { SensorsModule } from './sensors/sensors.module';
import { DataModule } from './data/data.module';
import { AdminModule } from './admin/admin.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://localhost:27017/',
    ) /*mongodb://localhost/agritech*/,
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    SensorsModule,
    DataModule,
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
