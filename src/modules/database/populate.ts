import { faker } from '@faker-js/faker';
import _ from 'lodash';

import { UserEntity } from "../user/user.entity";
import { generateUsers } from "../user/user.mock";
import { AppDataSource } from "./data-source";
import { generateBrand } from '../brand/brand.mock';
import { BrandEntity } from '../brand/brand.entity';
import { generateProduct } from '../product/product.mock';
import { ProductEntity } from '../product/product.entity';

AppDataSource.initialize()
  .then(async () => {
    const limit = 10;

    // Create Users
    const userRepository = AppDataSource.getRepository(UserEntity);
    await userRepository.save(generateUsers(limit));
    console.log(`Se han creado ${limit} usuarios falsos.`);

    // Create Brands
    const users = await userRepository.find({ take: limit });
    const userIds = users.map(user => user.id);
    const brandsMock = new Array(limit)
      .fill(0)
      .map(() => {
        const randomAmount = faker.number.int({ min: 0, max: limit });
        const randomUserIds = _.sampleSize(userIds, randomAmount);
        return generateBrand(randomUserIds)
      });
    const brandRepository = AppDataSource.getRepository(BrandEntity);
    await brandRepository.save(brandsMock);
    console.log(`Se han creado ${limit} marcas falsas.`);

    // Create Products
    const brands = await brandRepository.find({ take: limit });
    const productsMock = new Array(limit)
      .fill(0)
      .map(() => {
        const [ brand ] = _.sampleSize(brands, 1);
        return generateProduct(brand)
      });

    const productRepository = AppDataSource.getRepository(ProductEntity);
    await productRepository.save(productsMock);
    console.log(`Se han creado ${limit} productos falsos.`);
  })
  .catch((error) => {
    console.error("Error during Data Source initialization", error);
  });
