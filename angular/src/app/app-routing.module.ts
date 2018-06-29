import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
 
const appRoutes: Routes = [
    { path: '', redirectTo:'/product-list', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes, { enableTracing: true }),
        
    ],
    exports:[
        RouterModule,
    ],
})

export class AppRoutingModule{}