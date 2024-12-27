import { Body, Controller, Get, Param, Post, Query, Render } from '@nestjs/common';
import { WeatherService } from 'src/services/weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Render('home')
  @Get()
  async home(){}

  @Post('weather')
  async getWeather(@Body('city') city: string) {
    try {
      const weather = await this.weatherService.getWeather(city);
      return { message: null, weather };
    } catch (error) {
      return { message: error.message, weather: null };
    }
  }

  @Get('history')
  getSearchHistory() {
    return this.weatherService.getSearchHistory();
  }
}
