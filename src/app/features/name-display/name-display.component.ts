import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-display',
  templateUrl: './name-display.component.html',
  styleUrls: ['./name-display.component.css']
})
export class NameDisplayComponent implements OnInit {

  constructor() { }
  newName: string = 'Frank Smith'


  inputName: string = 'John'

  updateName(newName: string) {
    this.newName = newName
  }
  ngOnInit(): void {
  }

}
