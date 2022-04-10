import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-chkbinding',
  templateUrl: './chkbinding.component.html',
  styleUrls: ['./chkbinding.component.css']
})
export class ChkbindingComponent implements OnInit {
  example$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
  registration: any;

  constructor() { }

  ngOnInit(): void {

  }
  getRegData() {
    console.log('test')
    this.example$.subscribe((t: any) => {
      console.log(t)
    })
  }


}
