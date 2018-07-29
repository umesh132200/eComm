import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private dataShare:DataSharingService ,private router:Router, private actRoute:ActivatedRoute) { }
  productDetail: any;
  banner:string;
  getProductDetail() {
    this.dataShare.productDetail.subscribe(data => {
      this.productDetail = data;
      console.log(data);
    })
  }

  selectImage(image) {
   this.banner = image;
  }

  ngOnInit() {
    this.getProductDetail();
 }

}
