import { AppDataSource } from "../database/data-source";
import { UserEntity } from "./user.entity";
import { User } from "./user.interface";

export class UserService {
  private userRepository = AppDataSource.getRepository(UserEntity);

  create(userDto: Omit<User, 'id'>) {
    this.userRepository.save(userDto);
  }

  findAll() {
    return this.userRepository.find();
  }
}