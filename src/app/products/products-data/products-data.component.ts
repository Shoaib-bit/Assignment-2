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

  update(index:any){
    this.productList.newProduct.push(this.productList.products[index]);
    this.productList.products.splice(index,1)
  }
  updateAgain(index:any){
    this.productList.products.push(this.productList.newProduct[index])
    this.productList.newProduct.splice(index,1)
  }
  
}
