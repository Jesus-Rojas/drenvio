import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';
import { User } from './user.interface';

@Entity({ name: 'users' })
export class UserEntity implements User {
  @ObjectIdColumn()
  id!: ObjectId;

  @Column()
  name!: string;
}
