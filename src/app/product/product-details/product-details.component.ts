import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }
  @Input() product = '';

  @Output() newProducts = new EventEmitter();
  newProduct = [];
  productName: string = '';
  addNewProduct(value: string) {
    this.newProducts.emit({
      newProductName: this.productName
    })
  }

  ngOnInit(): void {
  }

}


