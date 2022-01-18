import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../data-services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private product: ProductService) { }
  productData: any = this.product.getProducts();

  products() {
    console.log(this.productData);
    return this.productData;

  }

  ngOnInit(): void {
  }

}
