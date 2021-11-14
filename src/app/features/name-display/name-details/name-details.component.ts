import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-details',
  templateUrl: './name-details.component.html',
  styleUrls: ['./name-details.component.css']
})
export class NameDetailsComponent implements OnInit {

  constructor() { }
  @Input() fullName = '';

  ngOnInit(): void {
  }

}
