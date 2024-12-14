// -- IMPORTS

import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// -- STATEMENTS

describe(
  'AppController',
  () =>
  {
      let appController: AppController;

      beforeEach(
        async () =>
        {
            let app: TestingModule = await Test.createTestingModule(
                {
                    controllers: [ AppController ],
                    providers: [ AppService ],
                }
                ).compile();

            appController = app.get< AppController >( AppController );
        }
        );

      describe(
          'root',
          () =>
          {
              it(
                  'should return "Hello World!"',
                  () =>
                  {
                      expect( appController.getHello() ).toBe( 'Hello World!' );
                  }
                  );
          }
          );
  }
  );
