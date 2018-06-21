import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private products: ProductService, private httpClient: HttpClient, private domSanitizer: DomSanitizer) { 
  }
  
  productDetail:any;
  productImage:any;

  getRender() {
     this.products.getProducts('http://localhost:3000/api/products')
     .then(
       data => {
         this.productDetail = data[0];
         this.productImage = this.domSanitizer.bypassSecurityTrustUrl(this.productDetail.productPhotos[0]);
         console.log(this.productDetail);
         console.log(this.productImage);
        }
     )
  }
  
  ngOnInit() {
    this.getRender();
  }
}
