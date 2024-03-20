import { faker } from '@faker-js/faker';
import { Brand } from './brand.interface';

export const generateBrand = (availableUserIds: Brand['availableUserIds'] = []): Omit<Brand, 'id'> => ({
  name: faker.commerce.productName(),
  discount: faker.number.int({
    min: 1,
    max: 100
  }),
  availableUserIds,
});
