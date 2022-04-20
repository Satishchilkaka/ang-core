import { Component, OnInit } from '@angular/core';
import { WeatherServicesService } from '../weather-services.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {

  constructor(

    private weatherService: WeatherServicesService
  ) { }


  ngOnInit(): void {
    console.log('HYD', this.weatherService.getWeatherData('New York'));
  }

  getNewWeatherData() {
    this.weatherService.getWeatherData('New York').subscribe(data => {
      console.log(data)
      return console.log('data is', data);

    })
  }






}
