import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-name',
  templateUrl: './display-name.component.html',
  styleUrls: ['./display-name.component.css']
})
export class DisplayNameComponent implements OnInit {

  constructor() { }
  @Input() fullName = '';
  ngOnInit(): void {
  }

}
