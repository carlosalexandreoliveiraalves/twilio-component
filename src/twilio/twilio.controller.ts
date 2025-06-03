// src/twilio/twilio.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { TwilioService } from './twilio.service';

@Controller('sms')
export class TwilioController {
  constructor(private readonly twilioService: TwilioService) {}

  @Post('send')
  async sendSms(@Body() body: { to: string; message: string }) {
    const sid = await this.twilioService.sendSms(body.to, body.message);
    return { success: true, sid };
  }

  @Post('send-whatsapp')
  async sendWhatsApp(@Body() body: { to: string; message: string }) {
    const sid = await this.twilioService.sendWhatsApp(body.to, body.message);
    return { success: true, sid };
  }

  @Post('create-message')
  async createMessage(@Body() body: { to: string; variables: any }) {
    const sid = await this.twilioService.createMessage(body.to, body.variables);
    return { success: true, sid };
  }
}