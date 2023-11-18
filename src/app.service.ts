import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Queue } from 'bull';

@Injectable()
export class AppService {
  constructor(
    @InjectQueue('app') private audioQueue: Queue,
    private configService: ConfigService,
  ) {}

  async getHello(): Promise<string> {
    const hostname = this.configService.get<string>('host');

    await this.audioQueue.add({
      app: hostname,
    });

    return `Hello ${hostname}!`;
  }
}
