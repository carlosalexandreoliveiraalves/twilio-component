// src/twilio/twilio.service.ts
import { Injectable } from '@nestjs/common';
import * as Twilio from 'twilio';

@Injectable()
export class TwilioService {
  private client: Twilio.Twilio;

  constructor() {
    const accountSid = ''; // Substitua pelo seu Account SID
    const authToken = ''; // Substitua pelo seu Auth Token
    this.client = Twilio(accountSid, authToken);
  }


  async sendSms(to: string, body: string): Promise<string> {
    const message = await this.client.messages.create({
      body,
      to: `whatsapp:${to}`, // <- prefixo whatsapp
      from: 'whatsapp:+19062545363', // <- número do sandbox
    });

    return message.sid;
  }
}

