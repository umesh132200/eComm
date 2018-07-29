import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataSharingService } from '../services/data-sharing.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http:HttpClient,
              private dataShare: DataSharingService,
              private router: Router,
              private actRoute: ActivatedRoute ){}
  category:any;
  productData:any;
  data: Observable<any>;
  private selectedId:any;

  getCategoryData():any {
    let apiUrl = "https://www.buynsta.com/kbrest/index/index";
    this.http.get(apiUrl).subscribe( 
      data => {
        this.category = data;
        console.log(data);
      })
  }

  getProductData():any {
    let apiUrl = "http://localhost:3000/api/products";
    this.http.get(apiUrl).subscribe(
      data => {
        this.productData = data;
      }
    )
  }

  dataSendToProductList(product_list) {
    this.dataShare.availProductListToService(product_list);
    this.router.navigate(['/category/product-list'], {relativeTo: this.actRoute});
  }

  getProductDetail(data) {
    this.dataShare.availProductDetailToService(data);
    this.router.navigate(["/category/product-list/product-detail", data._id], {relativeTo: this.actRoute})
  } 

 ngOnInit() { 
    this.getCategoryData();
    this.getProductData();
 }

}
