import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor( private httpClient: HttpClient ) { }
 
  public getProducts(url:string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.httpClient.get(url)
      .subscribe(
        res => {
          if(!res) {
            reject(res);
          }
          resolve(res);
        },
        error => {}
      )
    }).catch(reason =>{});
  }
}
