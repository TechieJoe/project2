import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';  
import { WeatherModule } from './modules/weather.module';
import { ConfigModule } from '@nestjs/config';
import { WeatherService } from './services/weather.service';
import { WeatherController } from './controllers/weather.controller';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    WeatherModule
  ],
  controllers: [WeatherController],
  providers: [WeatherService],
})
export class AppModule {}
