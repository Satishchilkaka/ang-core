import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  constructor() { }

  @Input() pData: any = []


  ngOnInit(): void {
  }

}
