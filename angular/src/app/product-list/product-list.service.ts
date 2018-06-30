import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';
import { Observable }             from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService implements Resolve<any>{

  constructor( private httpClient: HttpClient ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.httpClient.get('http://localhost:3000/api/products');
    }
  }
  // public getProducts(url:string): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this.httpClient.get(url)
  //     .subscribe(
  //       res => {
  //         if(!res) {
  //           reject(res);
  //         }
  //         resolve(res);
  //       },
  //       error => {}
  //     )
  //   }).catch(reason =>{});
  // }

