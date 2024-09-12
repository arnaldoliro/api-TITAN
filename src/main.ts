import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { changeErrorMessage } from './helpers/errorMessageValidator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => {
        const result = errors.map((error) => {
          let errorMessage: string | null = changeErrorMessage({
            contrainKey: Object.keys(error.constraints)[0],
            property: error.property,
          });
          if (!errorMessage) {
            errorMessage = error.constraints[Object.keys(error.constraints)[0]];
          }

          return {
            property: error.property,
            message: errorMessage,
          };
        });

        return new BadRequestException(result);
      },
      stopAtFirstError: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
