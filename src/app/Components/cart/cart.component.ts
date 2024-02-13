import { Component } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart = this.cartService.getCart();
  totalPrice = this.cartService.getTotalPrice();
  constructor(private cartService: CartService) { }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
    this.cart = this.cartService.getCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cart = this.cartService.getCart();
  }

  updateTotalPrice() {
    this.totalPrice = this.cartService.getTotalPrice();
  }
}