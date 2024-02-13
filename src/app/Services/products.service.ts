import { Injectable } from '@angular/core';
import { Product } from '../Models/product';
import { Category } from '../Models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [];

  constructor() {
    this.generateRandomProducts();
  }

  /**
   * Generates a list of random products
   */
  generateRandomProducts() {
    for (let i = 1; i < 16; i++) {
      const product = new Product();
      product.id = i;
      product.name = `Product ${i}`;
      product.description = `Description for product ${i}`;
      product.picture = `https://picsum.photos/id/${i}`;
      product.price = parseFloat((Math.random() * 100).toFixed(2));
      product.category = { id: i, name: `Category ${i}` };
      product.favorite = false;
      this.products.push(product);
    }
  }

  getProducts(): Product[] {
    return this.products;
  }

  getCategories():string[]{
    console.log(this.products.map((product) => product.category.name));
    return this.products.map((product) => product.category.name);
  }
}