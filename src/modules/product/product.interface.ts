import { ObjectId } from "typeorm";
import { Brand } from "../brand/brand.interface";

export interface Product {
  id: ObjectId;
  name: string;
  slug: string;
  price: number;
  stock: number;
  brand: Brand;
}
