import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { ProductListComponent } from './product-list/product-list.component';


import { AppRoutingModule } from './app-routing.module';
import { ProductListModule } from './product-list/product-list.module';

import { SafeTrustUrlPipe } from './pipes/safe-trust-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavbarComponent,
    FooterComponent,
    SafeTrustUrlPipe,
    PageNotFoundComponent
    /*ProductListComponent*/
  ],
  imports: [
    BrowserModule,
    ProductListModule,
    AppRoutingModule
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
