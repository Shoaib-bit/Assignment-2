import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path : 'products',
        loadChildren :  () => import('./products/products.module')
        .then((mod) => mod.ProductsModule) 
      },
      {
        path : 'users',
        loadChildren :  () => import('./users/users.module')
        .then((mod) => mod.UsersModule) 
      },
      {
        path : 'poste',
        loadChildren :  () => import('./poste/poste.module')
        .then((mod) => mod.PosteModule) 
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
