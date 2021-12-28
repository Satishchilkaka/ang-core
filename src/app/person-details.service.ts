import { Injectable } from '@angular/core';
import personData from '../assets/person-data.json'

@Injectable({
  providedIn: 'root'
})
export class PersonDetailsService {

  newRawData: any = personData;
  getInfo() {
    return this.newRawData;
  }
  constructor() { }
}
