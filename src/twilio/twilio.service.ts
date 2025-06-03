// src/twilio/twilio.service.ts
import { Injectable } from '@nestjs/common';
import * as Twilio from 'twilio';

@Injectable()
export class TwilioService {
  private client: Twilio.Twilio;

  constructor() {
    const accountSid = 'ACead3c002e91a5622f45f438c03748d6c'; // Substitua pelo seu Account SID
    const authToken = '8fae4233f608e0cc9b77169ad42580aa';
    this.client = Twilio(accountSid, authToken);
  }


  async sendSms(to: string, body: string): Promise<string> {
    const message = await this.client.messages.create({
      body,
      to: `${to}`, // <- prefixo whatsapp
      from: '+19062545363', // <- número do sandbox
    });

    return message.sid;
  }
}

