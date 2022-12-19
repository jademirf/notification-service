import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipient notifications', () => {
  it('should be able to Get notifications by recipientId', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'recipient-test-id-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-test-id-1' }),
        expect.objectContaining({ recipientId: 'recipient-test-id-1' }),
      ]),
    );
  });
});
