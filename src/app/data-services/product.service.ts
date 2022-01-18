import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  products = ['product1', 'product2', 'product3'];
  getProducts() {
    return this.products;
  }
}
