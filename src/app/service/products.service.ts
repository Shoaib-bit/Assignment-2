import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class productService {
  products = [
    {
       id : 1,
       name : 'IPhone 9',
       price : 549,
       brand : 'Apple',
       rating : 4.6
    },
    {
        id : 2,
        name : 'Samsung Universe 9',
        price : 686,
        brand : 'Samsung',
        rating : 4.3
    },
    {
        id : 3,
        name : 'OPPOF19',
        price : 454,
        brand : 'Oppo',
        rating : 4.7
    },
    {
        id : 4,
        name : 'Infinix INBOOK',
        price : 399,
        brand : 'Infinix',
        rating : 4.9
    },
    {
        id : 5,
        name : 'Huawei P30',
        price : 876,
        brand : 'Huawei',
        rating : 3.8
    },
    {
        id : 6,
        name : 'Lenovo X30',
        price : 600,
        brand : 'Lenovo',
        rating : 4.8
    },
    {
        id : 7,
        name : 'Google 3X',
        price : 876,
        brand : 'Google',
        rating : 4.6
    }
  ]
  newProduct : any= [];
  constructor() { }
}
