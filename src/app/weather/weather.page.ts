import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  weatherData: any;

  constructor() {}

  ngOnInit() {
    this.getWeatherData();
  }

  async getWeatherData() {
    const apiKey =
      'd626ef1de425f96890ecce16a02b7d63'; 
    const apiKey2 = "b692beaa-dff5-11ee-be1e-0242ac130002-b692bf22-dff5-11ee-be1e-0242ac130002";
      const city = 'SALAMANCA';
    const lat = 20.569500624624187;
    const lng = -101.19562748166241;

    const now = new Date();

    var utc_timestamp = Date.UTC(now.getUTCFullYear(),now.getUTCMonth(), now.getUTCDate() , 
    now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds());
    console.log(now);
    console.log(utc_timestamp);

    try {
  
           const params = 'airTemperature,pressure,cloudCover,humidity';
      fetch(
        `https://api.stormglass.io/v2/weather/point?lat=${lat}&start=${utc_timestamp}&end=${utc_timestamp}&lng=${lng}&params=${params}`,
        {
          headers: {
            Authorization: apiKey2,
          },
        }
      )
        .then((response) => response.json())
        .then((jsonData) => {
          // Do something with response data.
          console.log(jsonData);
          this.weatherData = jsonData.hours[0];
        });
        
      //  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      // const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d626ef1de425f96890ecce16a02b7d63`);
      
      //  this.weatherData = response.data;
      
      //  console.log(response.data);
    } catch (error) {
      console.error('Error al obtener datos del clima:', error);
    }
  }
}
