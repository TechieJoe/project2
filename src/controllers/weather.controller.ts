import { Body, Controller, Get, Render, Logger, Post } from '@nestjs/common';
import { WeatherService } from '../services/weather.service';

@Controller('weather')
export class WeatherController {
  private readonly logger = new Logger(WeatherController.name);

  constructor(private readonly weatherService: WeatherService) {}

  @Render('home')
  @Get('/')
  async home() {
    this.logger.log('GET /');
  }

  @Post('weather')
  async getWeather(@Body('city') city: string) {
    this.logger.log(`POST /weather with city: ${city}`);
    try {
      const weather = await this.weatherService.getWeather(city);
      return { message: null, weather };
    } catch (error) {
      return { message: error.message, weather: null };
    }
  }

  @Get('history')
  getSearchHistory() {
    this.logger.log('GET /history');
    return this.weatherService.getSearchHistory();
  }
}
