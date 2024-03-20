import { ObjectId } from "typeorm";
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

  mapperProduct(product: ProductEntity) {
    return {
      ...product,
      brand: {
        id: product.brand.id,
        name: product.brand.name,
      }
    }
  }

  async findAllWithStockAvailable() {
    const products = await this.productRepository.find({
      where: {
        stock: { $gt: 0 } as any,
      }
    });

    return products;
    // return products.map(this.mapperProduct);
  }

  async findProductWithSpecialPrice(slug: string, userId: ObjectId) {
    const product = await this.productRepository.findOne({
      where: { slug }
    });

    if (!product) throw new Error('Product not found');
    
    if (!product.brand.availableUserIds.some((availableUserId) => availableUserId.equals(userId))) {
      return this.mapperProduct(product).price;
    }
    
    product.price = product.price * product.brand.discount / 100;
    return this.mapperProduct(product).price;
  }
}