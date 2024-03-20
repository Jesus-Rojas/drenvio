import { AppDataSource } from "../database/data-source";
import { ProductEntity } from "./product.entity";
import { Product } from "./product.interface";

export class ProductService {
  private productRepository = AppDataSource.getRepository(ProductEntity);

  create(productDto: Omit<Product, 'id'>) {
    this.productRepository.save(productDto);
  }

  findAll() {
    return this.productRepository.find();
  }
}