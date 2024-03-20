import { ObjectId } from "typeorm";
import { User } from "../user/user.interface";

export interface Brand {
  id: ObjectId;
  name: string;
  availableUserIds: User['id'][];
  discount: number;
}