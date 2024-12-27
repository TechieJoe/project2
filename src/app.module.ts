import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';  
import { WeatherModule } from './modules/weather.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    WeatherModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
