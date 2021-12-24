import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cycles',
  templateUrl: './cycles.component.html',
  styleUrls: ['./cycles.component.css']
})
export class CyclesComponent implements OnInit, OnChanges {
  data: any = 0;

  constructor() { }
  // changeData() {
  //   this.data + 1;
  // }
  dataN: number = 1;
  ngOnChanges(): void {

  }
  ngOnInit(): void {
  }
}
