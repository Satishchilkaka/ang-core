import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  productName: string = "Product --> Product details";


  inputvalues(airport: any) {
    console.log('In put value is', airport)
  }


  ngOnInit(): void {
  }

}
