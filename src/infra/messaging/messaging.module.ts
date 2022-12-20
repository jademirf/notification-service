import { SendNotification } from 'src/application/use-cases/send-notification';
import { Module } from '@nestjs/common';
import { KafkaConsumerService } from '@infra/messaging/kafka/kafka-consumer.service';
import { NotificationsController } from './kafka/controllers/notifications.controller';
import { DatabaseModule } from '@infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [NotificationsController],
})
export class MessagingModule {}
