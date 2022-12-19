import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipient notifications', () => {
  it('should return the count of notification by recipientId', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-test-id-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-test-id-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-test-id-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-test-id-1',
    });

    expect(count).toEqual(2);
  });
});
