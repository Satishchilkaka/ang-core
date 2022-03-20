import { Component, OnInit } from '@angular/core';
import ngModuleDef from '../../../assets/ngModule/ngmoduleNote.json'
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
  ngModuleDefinition = ngModuleDef.Definition
  ngModuleProperties = ngModuleDef.properties
  ngModuleIntroduction = ngModuleDef.intro
  ngModuleExample = ngModuleDef.example

  ngOnInit(): void {
  }

}
