import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //product: Product[] = [];

  constructor(private httpClient:HttpClient,
    @Inject('apiUrl') private apiUrl) { }

  getProduct(): Observable<HttpResponse<Product[]>> {
    return this.httpClient.get<Product[]>(
      this.apiUrl + '/products', {observe: 'response'});
  }
}
