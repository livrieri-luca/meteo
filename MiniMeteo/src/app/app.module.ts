import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.model';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RicercaMeteoComponent } from './ricerca-meteo/ricerca-meteo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MappaMeteoComponent } from './mappa-meteo/mappa-meteo.component';
import { GeocodingService } from './geocoding-service.service'; // Modifica qui

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RicercaMeteoComponent,
    MappaMeteoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    GeocodingService, // Sposta qui
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
