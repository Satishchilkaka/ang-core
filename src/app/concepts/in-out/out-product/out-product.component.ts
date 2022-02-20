import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-out-product',
  templateUrl: './out-product.component.html',
  styleUrls: ['./out-product.component.css']
})
export class OutProductComponent implements OnInit {
  testProduct = ['Product1', 'Product2', 'Product3', 'Product4', 'Product5'];
  productDetails = [
    {
      productName: 'Product1',
      productPrice: '$100',
      productDescription: 'Product1 Description',
    },
    {
      productName: 'Product2',
      productPrice: '$200',
      productDescription: 'Product2 Description',

    },
    {
      productName: 'Product3',
      productPrice: '$300',
      productDescription: 'Product3 Description',
    },
    {
      productName: 'Product4',
      productPrice: '$400',
      productDescription: 'Product4 Description',
    },
    {
      productName: 'Product5',
      productPrice: '$500',
      productDescription: 'Product5 Description',
    }
  ]
  constructor() { }
  pDescription: any
  pName: any
  pPrice: any
  onGetProductInfo(name: any, price: any, description: any,) {
    this.pName = name,
      this.pPrice = price,
      this.pDescription = description
  }
  ngOnInit(): void {
  }

}
