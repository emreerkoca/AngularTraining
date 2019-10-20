import { Injectable } from '@angular/core';

import { Product } from '../product';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsUrl = "http://northwindapi.azurewebsites.net/api/products";
  product: any = [];

  constructor(private httpClient:HttpClient) { }

  getProduct(): Observable<HttpResponse<Product[]>> {
    return this.httpClient.get<Product[]>(
      this.productsUrl, {observe: 'response'});
  }
}
