import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherServicesService {

  constructor(private http: HttpClient) { }

  public getWeatherData(city: string) {
    return this.http.get(`https://api.weatherapi.com/v1/current.json?key=733a46e9326447cdbed24233221904&q=${city}&aqi=no`);
  }


}
