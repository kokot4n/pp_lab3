import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppComponent } from './app.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { WeatherComponent } from './weather/weather.component';
import { Routes, RouterModule } from '@angular/router';
import { RouterComponent } from './router/router.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondaryComponent,
    WeatherComponent,
    RouterComponent
  ],
  imports: [
    NgxDatatableModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule,
    SecondaryComponent,
    WeatherComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
