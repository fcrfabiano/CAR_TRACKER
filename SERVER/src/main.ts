// -- IMPORT

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// -- FUNCTIONS

async function bootstrap(
  )
{
  let app = await NestFactory.create( AppModule );

  await app.listen( process.env.PORT ?? 3000 );
}

bootstrap();
