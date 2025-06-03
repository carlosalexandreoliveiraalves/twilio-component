import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwilioService } from './twilio/twilio.service';
import { TwilioController } from './twilio/twilio.controller';
import { TwilioModule } from './twilio/twilio.module';

@Module({
  imports: [TwilioModule],
  controllers: [AppController, TwilioController],
  providers: [AppService, TwilioService],
})
export class AppModule {}
