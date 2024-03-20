import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';
import { BrandEntity } from '../brand/brand.entity';
import { Product } from './product.interface';

@Entity({ name: 'products' })
export class ProductEntity implements Product {
  @ObjectIdColumn()
  id!: ObjectId;

  @Column()
  name!: string;

  @Column()
  slug!: string;

  @Column()
  price!: number;

  @Column()
  stock!: number;

  @Column(() => BrandEntity)
  brand!: BrandEntity;
}