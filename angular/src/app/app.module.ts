import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SafeTrustUrlPipe } from './pipes/safe-trust-url.pipe';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { DataSharingService } from './services/data-sharing.service';



@NgModule({
  declarations: [
    AppComponent,
    SafeTrustUrlPipe,
    ProductsComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductsComponent},
      { path: 'category/product-list/product-detail/:id', component: ProductDetailComponent },
      { path: 'category/product-list', component: ProductListComponent },
      { path: '', redirectTo: '/products', pathMatch: 'full' },
      // { path: '**', component: ProductsComponent }
      
    ]),
   HttpClientModule,
  ],
  providers: [ DataSharingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
