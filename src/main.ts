// filepath: /c:/Users/USER/weather app/app/src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const configService = app.get(ConfigService);

  // Set up EJS as the templating engine
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // Set the directory for EJS files
  app.setViewEngine('ejs'); // Use EJS as the templating engine

  const port = configService.get<number>('PORT') || 3000;
  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();