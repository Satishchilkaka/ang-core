import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-in-product',
  templateUrl: './in-product.component.html',
  styleUrls: ['./in-product.component.css']
})
export class InProductComponent implements OnInit {

  constructor() { }
  @Input() testProduct: any;
  @Input() product: any;
  @Output() getProductInfo = new EventEmitter<any>();
  onSendProduct(name: string, price: string, description: string) {
    this.getProductInfo.emit({ name: name, price: price, description: description });
    // this.getProductInfo.emit(price);
    // this.getProductInfo.emit(description);
  }
  ngOnInit(): void {
  }

}
