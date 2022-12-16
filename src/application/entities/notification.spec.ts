import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be possible to create a notification', () => {
    const notification = new Notification({
      content: new Content('New random request'),
      category: 'social',
      recipientId: 'something-to-replace-an-id',
    });

    expect(notification).toBeTruthy();
  });
});
