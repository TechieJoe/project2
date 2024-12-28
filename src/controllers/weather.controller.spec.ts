import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios'; // Import HttpModule
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule
import { WeatherController } from './weather.controller';
import { WeatherService } from '../services/weather.service'; // Import WeatherService

describe('WeatherController', () => {
  let controller: WeatherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule.forRoot()], // Add HttpModule and ConfigModule
      controllers: [WeatherController],
      providers: [WeatherService], // Add WeatherService to providers
    }).compile();

    controller = module.get<WeatherController>(WeatherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
