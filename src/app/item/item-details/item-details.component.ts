import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  constructor() { }

  @Input() itemName = '';

  ngOnInit(): void {
  }

}
