import { Module } from '@nestjs/common';
import { WeatherModule } from './modules/weather.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    WeatherModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
