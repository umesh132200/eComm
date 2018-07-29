import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../services/data-sharing.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private dataShare: DataSharingService) { }
  productList:any;

  getProductList() {
    this.dataShare.productList.subscribe(
      data => {
      this.productList = data
      console.log(data);
      }
    )
  }
  ngOnInit() {
    this.getProductList();
  }

}
