import { Component } from '@angular/core';
import { productService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products-data',
  templateUrl: './products-data.component.html',
  styleUrls: ['./products-data.component.css']
})
export class ProductsDataComponent {
  constructor(public productList : productService){

  }
  newProducts: any = [];
  update(index:any){
    this.newProducts.push(this.productList.products[index]);
    this.productList.products.splice(index,1)
  }
  updateAgain(index:any){
    this.productList.products.push(this.newProducts[index])
    this.newProducts.splice(index,1)
  }
  
}
