import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }

  personName = ['Frank', 'Smith', 'John', 'Doe', 'Test']
  newEnteredName: any;
  onUpdatePersonName(value: any) {
    const verifyName = this.personName.includes(value);
    if (verifyName === true) {
      alert('Name already exist in the list enter new name')
    }
    else {
      this.personName.push(value)
      this.newEnteredName = this.personName.slice(-1).pop();
    }
  }

  ngOnInit(): void {
  }

}
