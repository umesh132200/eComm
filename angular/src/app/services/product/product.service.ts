import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private httpClient: HttpClient ) { }
  result:any;
   async getProducts() {
     return this.result = await this.httpClient.get('http://localhost:3000/api/products').toPromise();
   }
}
