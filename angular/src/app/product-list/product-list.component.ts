import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private products: ProductListService, private httpClient: HttpClient, private domSanitizer: DomSanitizer) { }

  productDetail:any;
  productImage1:any;
  productImage2:any;
  productDetails:any;

  getRender() {
     this.products.getProducts('http://localhost:3000/api/products')
     .then(
       data => {
         this.productDetail = data[0];
        //  this.productImage1 = this.productDetail.productPhotos[0];
        //  this.productImage2 = this.productDetail.productPhotos[1];
         this.productDetails = data;
         console.log(this.productDetails);
        }
     )
  }

  ngOnInit() {
    this.getRender();
  }

}
