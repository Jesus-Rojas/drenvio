import { ObjectId } from "typeorm";

export interface User {
  id: ObjectId;
  name: string;
}
