import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';
import { Brand } from './brand.interface';

@Entity({ name: 'brands' })
export class BrandEntity implements Brand {
  @ObjectIdColumn()
  id!: ObjectId;

  @Column()
  name!: string;

  @Column()
  availableUserIds!: ObjectId[];

  @Column()
  discount!: number;
}