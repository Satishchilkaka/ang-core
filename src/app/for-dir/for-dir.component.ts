import { Component, OnInit } from '@angular/core';
import countriesName from '../../assets/data.json';
@Component({
  selector: 'app-for-dir',
  templateUrl: './for-dir.component.html',
  styleUrls: ['./for-dir.component.css']
})
export class ForDirComponent implements OnInit {

  constructor() { }
  data = countriesName
  ngOnInit(): void {
  }
  getData() {
    console.log(countriesName)
  }

}
