import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductListService } from './product-list.service';

const productListRoute:Routes = [
  { path: 'product-list', component: ProductListComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot( productListRoute )
  ],
    providers: [ ProductListService ]
})
export class ProductListRouteModule { }
