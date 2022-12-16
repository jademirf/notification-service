import { Notification } from 'src/application/entities/notification';
import { NotificationsRepository } from '../../../../application/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';

export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private PrismaService: PrismaService) {}
  async create(notification: Notification): Promise<void> {
    await this.PrismaService.notification.create({
      data: {
        id: notification.getId(),
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        createdAt: notification.createdAt,
        readAt: notification.readAt,
      },
    });
  }
}
