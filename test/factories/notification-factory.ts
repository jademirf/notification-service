import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type OverrideProps = Partial<NotificationProps>;

export function makeNotification(override: OverrideProps = {}) {
  return new Notification({
    category: 'test-category',
    content: new Content('New friendship request!'),
    recipientId: 'recipient-id',
    ...override,
  });
}
