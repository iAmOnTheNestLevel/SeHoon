import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
  );

  //? 전역 파이프
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, //? 명시해둔 타입에 맞게 자동 변환
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  //? 환경 변수 세팅
  const configService = app.get(ConfigService);
  console.log(`Running on ${configService.get('PORT')}`);
  await app.listen(configService.get('PORT'));
}
bootstrap();
