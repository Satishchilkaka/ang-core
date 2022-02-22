import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-private',
  templateUrl: './update-private.component.html',
  styleUrls: ['./update-private.component.css']
})
export class UpdatePrivateComponent implements OnInit {

  constructor() { }
  private someName = 'John Doe';
  ngOnInit(): void {
  }
  nNames = this.someName
}
