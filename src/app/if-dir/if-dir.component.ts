import { Component, OnInit } from '@angular/core';
import countriesName from '../../assets/data.json';
@Component({
  selector: 'app-if-dir',
  templateUrl: './if-dir.component.html',
  styleUrls: ['./if-dir.component.css']
})
export class IfDirComponent implements OnInit {

  constructor() { }
  data = countriesName;
  ngOnInit(): void {
  }

}
