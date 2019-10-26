import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Category } from '../category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient,
    @Inject('apiUrl') private apiUrl) { }

    getCategories(): Observable<HttpResponse<Category[]>> {
      return this.httpClient.get<Category[]>
      (this.apiUrl + '/categories', {observe: 'response'});
    }
}
