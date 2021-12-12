import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnChanges, OnInit {

  constructor() { }

  @Input() newData: any;
  onChanges() {
    this.newData = this.newData + 1;;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }
  ngOnInit(): void {

  }

}
