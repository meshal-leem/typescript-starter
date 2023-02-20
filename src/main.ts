import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });
  if (process.env.APP_ENV !== 'production') {
    app.enableCors({
      allowedHeaders: '*',
      origin: '*',
      credentials: false,
    });
  } else {
    app.enableCors({
      origin: process.env.FE_URL,
      credentials: true,
    });
  }
  await app.listen(8000);
}
bootstrap();
