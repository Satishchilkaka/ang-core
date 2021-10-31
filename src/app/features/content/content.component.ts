import { Component, OnInit } from '@angular/core';
import countriesData from '../../../assets/data.json';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  countries = countriesData;
  ngOnInit(): void {
  }

}
