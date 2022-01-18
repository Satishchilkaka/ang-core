import { Component, OnInit } from '@angular/core';

import { PersonServiceService } from '../../data-services/person-service.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css'],
  providers: [PersonServiceService]
})
export class FetchDataComponent implements OnInit {

  infoRec: any = [];

  constructor(private rec: PersonServiceService) { }
  display() {

    this.infoRec = this.rec.getPersonInfo();
    console.log(this.infoRec)

  }
  ngOnInit(): void {

  }

}
