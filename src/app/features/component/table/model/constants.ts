import { faker } from '@faker-js/faker/locale/en';
import type { OriginalTableEntity } from './types';

export const mockTableData: OriginalTableEntity[] = Array(120)
  .fill(null)
  .map(() => ({
    address: faker.location.streetAddress(),
    bio: faker.person.bio(),
    city: faker.location.city(),
    gender: faker.person.gender(),
    id: faker.string.uuid(),
    job: faker.person.jobTitle(),
    nationality: faker.location.country(),
    phoneNumber: faker.phone.number(),
    user: {
      email: faker.internet.email(),
      name: faker.internet.userName(),
    },
    vehicle: faker.vehicle.vehicle(),
    zodiacSign: faker.person.zodiacSign(),
  }));
