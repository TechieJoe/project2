import { Module } from '@nestjs/common';
import { WeatherController } from 'src/controllers/weather.controller';
import { WeatherService } from 'src/services/weather.service';
import { HttpModule } from '@nestjs/axios';

@Module({

    imports: [ HttpModule ],
    controllers: [WeatherController],
    providers: [WeatherService],

})
export class WeatherModule {}

