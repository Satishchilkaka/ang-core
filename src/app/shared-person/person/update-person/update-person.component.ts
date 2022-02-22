import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {

  constructor() { }

  @Input() pName: any
  @Output() getUpdatedName = new EventEmitter<any>();

  onSendName(name: string) {
    this.getUpdatedName.emit(name);
  }

  ngOnInit(): void {

  }

}
