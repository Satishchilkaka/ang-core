import { Component, OnInit, Input, EventEmitter, OnChanges, SimpleChange, SimpleChanges, Output } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.css']
})
export class OnChangesComponent implements OnChanges, OnInit {

  constructor() { }

  @Input() newData: any;
  @Output() dataChange = new EventEmitter();
  onChanges() {
    this.dataChange.next(this.newData + 10);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('tes', changes);

  }
  ngOnInit(): void {

  }

}
