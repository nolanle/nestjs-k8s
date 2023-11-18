import { Processor, Process } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('app')
export class AppConsumer {
  private readonly logger = new Logger(AppConsumer.name);

  @Process()
  async transcode(job: Job<{ app: string }>) {
    let progress = 0;
    for (let i = 0; i < 100; i++) {
      // await this.doSomething(job.data);
      progress += 1;
      await job.progress(progress);
    }

    this.logger.log(`Queue: app.transcode, ${job.data.app}`);
    return {};
  }
}
