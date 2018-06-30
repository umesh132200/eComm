import { Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private products: ProductListService, private actRoute: ActivatedRoute) { }
  
  productDetail:any;
  productImage1:any;
  productImage2:any;
  productDetails:any;

  getRender() {
  this.actRoute.data.subscribe((res) => {
    this.productDetail = res.products[0];
            this.productImage1 = this.productDetail.productPhotos[0];
           this.productImage2 = this.productDetail.productPhotos[1];
           this.productDetails = res.products;
           console.log(this.productDetail.productPhotos[0]);
            console.log(this.productDetails);
  })
  }

  ngOnInit() {
    console.log('component initiated');
    this.getRender();

  }

}
