import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-update-name',
  templateUrl: './update-name.component.html',
  styleUrls: ['./update-name.component.css']
})
export class UpdateNameComponent implements OnInit {

  constructor() { }

  @Output() updateName = new EventEmitter();

  onUpdateName(value: string) {
    this.updateName.emit(value);
  }
  ngOnInit(): void {

  }

}
