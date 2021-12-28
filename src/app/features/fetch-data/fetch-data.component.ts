import { Component, OnInit } from '@angular/core';
// import { PersonDetailsService } from "/Users/satishch/Documents/GitHub/exp/ang-core/src/app/person-details.service"

import { PersonDetailsService } from '../../person-details.service'

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css'],
  providers: [PersonDetailsService]
})
export class FetchDataComponent implements OnInit {

  infoRec: any = [];

  constructor(private rec: PersonDetailsService) { }
  display() {

    this.infoRec = this.rec.getInfo();
    console.log(this.infoRec)

  }
  ngOnInit(): void {

  }

}
