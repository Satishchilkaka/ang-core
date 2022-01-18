import { Injectable } from '@angular/core';
import personData from '../../assets/person-data.json'
@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {

  constructor() { }
  personInfo: any = personData;
  getPersonInfo() {
    return this.personInfo;
  }
}
// reactive forms