import { Injectable } from '@angular/core';
import { Product } from '../Models/product';

@Injectable({
 providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  addToCart(product: Product) {
    this.cart.push(product);
  }

  removeFromCart(product: Product) {
    const index = this.cart.findIndex(p => p.id === product.id);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }

  clearCart() {
    this.cart = [];
  }

  getCart() {
    return this.cart;
  }

  getCartSize() {
    return this.cart.length;
  }

  getTotalPrice() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}