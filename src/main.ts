import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  const frontendUrl = configService.get('FRONTEND_URL');

  app.setGlobalPrefix('api/v1', { exclude: [''] });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.enableCors({
    origin: frontendUrl,
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    preflightContinue: false,
    credentials: true,
  });

  // app.use((req, res, next) => {
  //   const allowedOrigins = [frontendUrl];
  //   const origin = req.headers.origin || req.headers.referer;

  //   if (allowedOrigins.includes(origin)) {
  //     next();
  //   } else {
  //     res.status(403).send('Forbidden');
  //   }
  // });

  await app.listen(port);
}
bootstrap();
