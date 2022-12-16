import { SendNotification } from './send-notification';
import { InMemoryNotificationsRepository } from '../../../test/in-memory-notifications-repository';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'New notification content',
      category: 'social',
      recipientId: 'lkasjdfl-lkj2lk3j4l2-sikuaf',
    });

    console.log(notificationsRepository.notifications);

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
