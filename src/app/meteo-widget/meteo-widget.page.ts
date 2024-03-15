import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meteo-widget',
  templateUrl: './meteo-widget.page.html',
  styleUrls: ['./meteo-widget.page.scss'],
})
export class MeteoWidgetPage  {

  pays: any;
  temp: any;
  pres: any;
  hum: any;
  weatherData: any;
  citys:string="";
  dataurl:string="";
  


  constructor(private httpclient: HttpClient) {

  }
  
  getWeatherData(){
    this.dataurl ="https://api.openweathermap.org/data/2.5/weather?q="+this.citys+"&appid=573c84f7cf38e9baf77a6636bd633e4d&units=metric" ;
    this.httpclient.get(this.dataurl)
    .subscribe(
      (response) =>{
        this.weatherData= response;
        console.log(this.weatherData);
        this.pays= this.weatherData['sys']['country'];
        this.temp= this.weatherData['main']['temp'];
        this.pres= this.weatherData['main']['pressure'];
        this.hum= this.weatherData['main']['humidity'];

      },
      (Error) =>{
        console.log(Error);
      }
    )

  }
  csearch(){
    this.getWeatherData();
    console.log(this.dataurl);
    console.log(this.citys);
  }



}
