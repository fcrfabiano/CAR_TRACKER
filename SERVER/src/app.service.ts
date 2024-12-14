// -- IMPORTS

import { Injectable } from '@nestjs/common';

// -- FUNCTIONS

@Injectable()
export class AppService
{
  getHello(
    ): string
  {
    return 'Hello World!';
  }
}
