// src/twilio/twilio.service.ts
import { Injectable } from '@nestjs/common';
import * as Twilio from 'twilio';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class TwilioService {
  private client: Twilio.Twilio;

  constructor() {
    const accountSid = process.env.accountSid; // Substitua pelo seu Account SID
    const authToken = process.env.authToken; // Substitua pelo seu Auth Token
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

  async sendWhatsApp(to: string, body: string): Promise<string> {
    const message = await this.client.messages.create({
      body,
      to: `${to}`, // <- prefixo whatsapp
      from: '+19062545363', // <- número do sandbox
    });

    return message.sid;
  }

  async createMessage(to: string, variables: any) {
    const message = await this.client.messages.create({
      contentSid: process.env.contentSid,
      contentVariables: JSON.stringify(variables),
      from: "whatsapp:+19062545363",
      messagingServiceSid: process.env.messagingServiceSid,
      to: `whatsapp:${to}`,
    });

    return message.sid;
  }

}

