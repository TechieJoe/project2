import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios'; // Use only HttpModule
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule.forRoot()], // Add HttpModule and ConfigModule
      providers: [WeatherService, ConfigService], // Remove HttpService from providers
    }).compile();

    service = module.get<WeatherService>(WeatherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
