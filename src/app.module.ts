import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppConsumer } from './app.consumer';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import app from './config/app';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'app',
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [app],
    }),
  ],
  controllers: [AppController],
  providers: [AppConsumer, AppService],
})
export class AppModule {}
