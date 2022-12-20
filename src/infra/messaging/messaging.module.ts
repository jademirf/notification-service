import { Module } from '@nestjs/common';
import { KafkaConsumerService } from '@infra/messaging/kafka/kafka-consumer.service';
import { NotificationsController } from './kafka/controllers/notifications.controller';

@Module({
  imports: [],
  providers: [KafkaConsumerService],
  controllers: [NotificationsController],
})
export class MessagingModule {}