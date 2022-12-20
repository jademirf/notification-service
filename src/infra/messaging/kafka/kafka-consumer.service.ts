import { OnModuleDestroy } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications-nest',
        brokers: ['fond-ladybird-6645-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'Zm9uZC1sYWR5YmlyZC02NjQ1JKSB9DqKCE3v5pGn7kBiWdz3Vyb_Rd3geUtmAfo',
          password:
            'cYh6U1VC3_3PwJnKWBrYBzn1_M_ThUCuKEBE0DJYNKdgIo2I2Ce0EkT5s9pMiXzgrKxJQg==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
