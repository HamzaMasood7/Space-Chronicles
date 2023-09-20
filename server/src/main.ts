import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

async function bootstrap() {
  dotenv.config();
  // const app = await NestFactory.create(AppModule);
  const server = express();

  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(server),
  );

  // Define the CORS configuration
  app.enableCors({
    origin: 'http://localhost:3000', // Replace with the URL of your front-end application
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // If you need to send cookies cross-origin
  });

  await app.listen(5000);
}
bootstrap();
