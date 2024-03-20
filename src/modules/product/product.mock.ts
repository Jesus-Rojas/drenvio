import { faker } from '@faker-js/faker';
import { Product } from './product.interface';
import { Brand } from '../brand/brand.interface';

export const generateProduct = (brand: Brand): Omit<Product, 'id'> => {
  const name = faker.commerce.productName();
  return {
    name,
    brand,
    price: +faker.commerce.price(),
    slug: faker.helpers.slugify(name),
    stock: 10,
  }
};
