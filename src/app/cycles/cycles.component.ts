import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cycles',
  templateUrl: './cycles.component.html',
  styleUrls: ['./cycles.component.css']
})
export class CyclesComponent implements OnInit, OnChanges {
  data = 0;
  constructor() { }
  changeData() {
    this.data + 1;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  ngOnInit(): void {
  }
}
