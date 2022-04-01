import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const _port = process.env.PORT || 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(_port, () => {
    console.log("Express server listening on port %d ", _port);
  });
}
bootstrap();
