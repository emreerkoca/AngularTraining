import {
  Component,
  OnInit,
  ɵConsole
} from '@angular/core';
import {
  Product
} from './product';
import {
  ProductService
} from './service/product.service';
import {
  HttpResponse
} from '@angular/common/http';
import {
  CartService
} from "../cart/service/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  addedProduct: string;

  constructor(private productService: ProductService,
    private cartService: CartService) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProduct().subscribe(response => {
      for (const p of response.body) {
        this.products.push({
          productId: p.productId,
          categoryId: p.categoryId,
          productName: p.productName,
          quantityPerUnit: p.quantityPerUnit,
          unitPrice: p.unitPrice,
          unitInStock: p.unitInStock
        });
      }
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

}
