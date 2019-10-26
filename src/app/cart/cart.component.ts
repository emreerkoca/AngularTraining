import { Component, OnInit } from '@angular/core';

import { CartItem } from './cart-item';
import { Product } from '../product/product';
import { CartService } from '../cart/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  isProductRemoved: boolean = false;
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(product: Product) {
    if (confirm('Item will remove from your cart. Do you confirm?')) {
      this.cartService.removeFromCart(product);
      this.isProductRemoved = true;
    }
  }
}
