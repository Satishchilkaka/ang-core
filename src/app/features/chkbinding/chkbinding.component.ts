import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chkbinding',
  templateUrl: './chkbinding.component.html',
  styleUrls: ['./chkbinding.component.css']
})
export class ChkbindingComponent implements OnInit {
  registration: any;

  constructor() { }

  ngOnInit(): void {
  }
  getRegData() {
    console.log('test', this.registration.value)
  }
}
