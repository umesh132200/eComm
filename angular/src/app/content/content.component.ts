import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private products: ProductService, private httpClient: HttpClient) { }

  ngOnInit() {
  this.getProducts();
  }
  data: any;
  // getProduct() {
  //    this.products.getProducts().then(
  //      result => {
  //        this.data = result;
  //      alert('hi');
  //      console.log(result);
  //      }, err => { }
  //    )
  // }
  async getProducts() {
    let data1 = await this.httpClient.get('http://localhost:3000/api/products').toPromise();
    this.data = data1[0];
    console.log(this.data);
  }
  
}
