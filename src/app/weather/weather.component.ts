import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  weather: any;
  columns = [{ prop: 'city', name: 'Город'}, { prop: 'temp', name: 'Температура'}, { prop: 'pressure', name: 'Давление'}, { prop: 'humidity', name: 'Влажность'}];
  rows: any[] = [];
  city = 'Odesa';
  alertIsOpen = false;

  getWeather(city: string): Observable<any>{
    return this.httpClient.get<any>(
      'http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=11f6c7832b5096ea219b19ec5d65f8b2&units=metric'
    );
  }

  ngOnInit(): void {
    this.send();
  }

  send(){
    this.getWeather(this.city).subscribe((weather: any) => {
      this.weather = weather;
      this.rows.push({city: weather.name, temp: weather.main.temp, pressure: weather.main.pressure, humidity: weather.main.humidity});
      this.rows = [...this.rows];
      console.log(this.rows);
    }, err => {
      this.alertIsOpen = true;
    }
    );
  }
}
