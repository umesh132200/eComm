import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductListService } from './product-list.service';

const productListRoute:Routes = [
  { path: 'product-list', component: ProductListComponent,
    resolve:{ products:ProductListService }
   }
]

@NgModule({
  imports: [ RouterModule.forChild( productListRoute ) ],
  exports: [ RouterModule ]
})
export class ProductListRouteModule { }
