import { Category } from "./category";

export class Product {
  id!: number;
  name!: string;
  description!: string;
  picture!: string;
  price!: number;
  category!: Category;
  favorite!: boolean;
}
