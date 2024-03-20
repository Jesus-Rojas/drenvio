import { faker } from '@faker-js/faker';
import { User } from './user.interface';

export const generateUser = (): Omit<User, 'id'> => ({
  name: faker.person.firstName(),
});

export const generateUsers = (amount: number) => new Array(amount).fill(0).map(generateUser);