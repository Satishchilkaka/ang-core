import { Component, OnInit } from '@angular/core';
import airportName from '../../assets/airportData.json';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  items = airportName[1];
  item = 'Data flow from Item -> Item details  !!!';

  ngOnInit(): void {
  }

}
