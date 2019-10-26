import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { ProductVatPipe } from './product/pipe/product-vat.pipe';
import { ProductFilterPipe } from './product/pipe/product-filter.pipe';
import { CategoryComponent } from './category/category.component';
import { CartService } from './cart/service/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    CartSummaryComponent,
    ProductVatPipe,
    ProductFilterPipe,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: 'apiUrl',
      useValue: 'http://northwindapi.azurewebsites.net/api'
    },
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
