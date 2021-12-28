import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from '../../data-services/person-service.service';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {

  constructor(private getData: PersonServiceService) { }
  personData: any = this.getData.getPersonInfo()
  pData: any = []

  fetchPersonData() {
    this.pData = this.personData
    console.log(this.pData)
  }

  ngOnInit(): void {
  }

}
