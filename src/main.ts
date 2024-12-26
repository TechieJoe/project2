import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Set up EJS as the templating engine
  app.setBaseViewsDir(join(__dirname, '..', 'views')); // Set the directory for EJS files
  app.setViewEngine('ejs'); // Use EJS as the templating engine

  await app.listen(2000);
}
bootstrap();
