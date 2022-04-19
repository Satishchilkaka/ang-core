import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  xhr = new XMLHttpRequest();
  request = "https://api.weatherapi.com/v1/current.json?key=733a46e9326447cdbed24233221904&q=New York&aqi=no"

  getWeatherData(): void {
    this.xhr.open("GET", this.request, true);
    this.xhr.send();
    this.xhr.onreadystatechange = () => {
      if (this.xhr.readyState === 4 && this.xhr.status === 200) {
        console.log(JSON.parse(this.xhr.response));
      }
    }
  }

}
