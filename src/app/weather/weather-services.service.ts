import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherInterface } from './weather-interface';
import { debounceTime, filter, map, switchMap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WeatherServicesService {
  resultsData$!: Observable<any>;
  container: any;
  results: any;
  subscription: Subscription = new Subscription();
  constructor(private http: HttpClient) { }

  public getWeatherData(city: string) {
    return this.http.get<WeatherInterface>(`https://api.weatherapi.com/v1/current.json?key=733a46e9326447cdbed24233221904&q=${city}&aqi=no`);
  }

  getWeatherReport(searchCity: any) {
    return this.http.get<WeatherInterface>(`https://api.weatherapi.com/v1/current.json?key=733a46e9326447cdbed24233221904&q=${searchCity}&aqi=no`)
  }
  getWeatherReportForCity(searchCity: string) {

    return this.http.get<WeatherInterface>(`https://api.weatherapi.com/v1/current.json?key=733a46e9326447cdbed24233221904&q=${searchCity}&aqi=no`)
      .pipe(
        map(data => {
          return data.current;
        }
        )
      );
  }

}
