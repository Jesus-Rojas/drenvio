import { AppDataSource } from "../database/data-source";
import { BrandEntity } from "./brand.entity";
import { Brand } from "./brand.interface";

export class BrandService {
  private brandRepository = AppDataSource.getRepository(BrandEntity);

  create(brandDto: Omit<Brand, 'id'>) {
    this.brandRepository.save(brandDto);
  }

  findAll() {
    return this.brandRepository.find();
  }
}