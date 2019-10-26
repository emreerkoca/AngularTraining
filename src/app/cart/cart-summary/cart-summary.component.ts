import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from '../service/cart.service';
import { CartItem } from '../cart-item';


@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit, DoCheck {
  totalCartItem: number;
  totalCartItemPrice: number;
  cartItems: CartItem[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
  }

  ngDoCheck() {
    this.totalCartItem = this.cartService.getCartItems()
      .reduce((result, cartItem) => result + cartItem.quantity, 0);
    console.log(this);
    this.totalCartItem = this.cartService.getCartItems()
      .reduce((result, cartItem) => result + cartItem.quantity * cartItem.product.unitPrice, 0);
  }

}
