import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import airportName from '../../../assets/airportData.json';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }
  // Data flow from PRODUCT -> product-details components
  @Input() product = '';


  // Data flow from PRODUCT-DETAILS -> product component

  @Output() airportData = new EventEmitter();
  airport: any = airportName;

  callProduct() {
    this.airportData.emit(this.airport);
  }


  ngOnInit(): void {
  }

}


