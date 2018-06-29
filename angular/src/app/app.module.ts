import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductListComponent } from './product-list/product-list.component';

import { AppRoutingModule } from "./app-routing.module";
import { ProductListRouteModule } from './product-list/product-list-route.module';

import { SafeTrustUrlPipe } from './pipes/safe-trust-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopbarComponent,
    NavbarComponent,
    SafeTrustUrlPipe,
    ProductDetailComponent,
    PageNotFoundComponent,
    ProductListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ProductListRouteModule,
    AppRoutingModule
   
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
