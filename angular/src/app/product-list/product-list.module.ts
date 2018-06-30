import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductListService } from './product-list.service';
import { ProductListRouteModule } from './product-list-route.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations:[ ProductListComponent ],
    imports: [ CommonModule, HttpClientModule, ProductListRouteModule ],
    providers:[ ProductListService ]
})
export class ProductListModule { }
