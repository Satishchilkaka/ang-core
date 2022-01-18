import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from '../../data-services/person-service.service';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {

  constructor(private personService: PersonServiceService) {
    this.personData = this.personService.getPersonInfo();
  }
  personData: any = [];
  pData: any = []

  fetchPersonData() {
    this.pData = this.personData
    console.log(this.pData)
  }

  ngOnInit(): void {
  }

}
