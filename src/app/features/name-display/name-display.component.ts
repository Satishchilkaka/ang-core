import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-display',
  templateUrl: './name-display.component.html',
  styleUrls: ['./name-display.component.css']
})
export class NameDisplayComponent implements OnInit {

  constructor() { }
  fullName: string = 'Frank Smith'

  newNames: string = '';
  updateName(newName: string) {
    this.newNames = newName
  }
  ngOnInit(): void {
  }

}
