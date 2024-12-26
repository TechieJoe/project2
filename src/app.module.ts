import { Module } from '@nestjs/common';
import { WeatherModule } from './modules/weather.module';

@Module({
  imports: [WeatherModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
