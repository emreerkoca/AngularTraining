import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private routeUrl = '/products';

  constructor(private httpClient: HttpClient,
    @Inject('apiUrl') private apiUrl) { }

  getProducts(seoUrl: string): Observable<HttpResponse<Product[]>> {
    if (seoUrl) {
      this.routeUrl = '/products/' + seoUrl;
    }

    return this.httpClient.get<Product[]>(
      this.apiUrl + this.routeUrl, {observe: 'response'});
  }
}
