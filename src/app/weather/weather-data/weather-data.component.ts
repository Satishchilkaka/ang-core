import { Component, OnInit } from '@angular/core';
import { WeatherServicesService } from '../weather-services.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { debounceTime, switchMap } from 'rxjs/operators';
import { WeatherInterface } from '../weather-interface';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {
  container: any;
  resultsData$: any;
  subscription: Subscription = new Subscription();
  results: any;
  location: any
  name: any;
  region: any;
  country: any;
  tz_id: any;

  temp_c: any;

  tempData: any

  constructor(
    private weatherService: WeatherServicesService,
    private http: HttpClient
  ) { }




  ngOnInit(): void {
    this.container = new FormGroup({

      searchCityName: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
    return this.resultsData$ = this.container.get('searchCityName')!.valueChanges.pipe(debounceTime(1000),
      switchMap(searchCity => this.weatherService.getWeatherReport(searchCity))
    );
  }
  getWeatherDataForCity() {

  }

  getAData() {
    this.subscription = this.resultsData$.subscribe((newData: WeatherInterface) => {
      console.log('newData is', newData);
      return this.tempData = {

        location: newData.location.name,
        region: newData.location.region,
        country: newData.location.country,
        tz_id: newData.location.tz_id,
        temp_c: newData.current.temp_c,
      }

    })
  }
  getNewWeatherData() {
    this.weatherService.getWeatherData('New York').subscribe(data => {
      return console.log('data is', data);

    })
  }






}
