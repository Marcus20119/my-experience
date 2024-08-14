import { faker } from '@faker-js/faker/locale/en';
import type { TableEntity } from './types';

export const mockTableData: TableEntity[] = Array(50)
  .fill(null)
  .map(() => ({
    address: faker.location.streetAddress(),
    gallery: Array(3)
      .fill(null)
      .map(() => faker.image.url()),
    id: faker.string.uuid(),
    phoneNumber: faker.phone.number(),
    user: {
      avatar: faker.image.avatar(),
      email: faker.internet.email(),
      name: faker.internet.userName(),
    },
  }));
