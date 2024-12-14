// -- IMPORTS

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// -- TYPES

@Controller()
export class AppController
{
    // -- CONSTRUCTORS

    constructor(
        private readonly appService: AppService
        )
    {
    }

    // -- INQUIRIES

    @Get()
    getHello(
      ): string
    {
        return this.appService.getHello();
    }
}
