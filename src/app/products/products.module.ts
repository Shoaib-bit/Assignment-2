import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDataComponent } from './products-data/products-data.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductsDataComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path : '',
        component : ProductsDataComponent
      }
    ])
  ]
})
export class ProductsModule { }
