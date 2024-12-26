import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class WeatherService {
  private readonly apiKey = 'ede3a5c65c2046b6903144426241712'; // Replace with your API key
  private readonly baseUrl = 'https://api.weatherapi.com/v1';
  private searchHistory: string[] = []; // In-memory storage for search history

  constructor(private readonly httpService: HttpService) {}

  async getWeather(city: string): Promise<any> {
    const url = `${this.baseUrl}/current.json?key=${this.apiKey}&q=${city}`;
    try {
        const response = await lastValueFrom(this.httpService.get(url));
        this.addToSearchHistory(city);
        return response.data;
      } catch (error) {
        throw new HttpException(
          'City not found or API error',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

  addToSearchHistory(city: string) {
    if (!this.searchHistory.includes(city)) {
      this.searchHistory.push(city);
    }
  }

  getSearchHistory(): string[] {
    return this.searchHistory;
  }
}
