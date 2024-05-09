// mappa-meteo.component.ts

import { Component, OnInit } from '@angular/core';

// Assicurati di aver importato Leaflet.js nel tuo progetto Angular
declare var L: any; // Dichiarazione di Leaflet per evitare errori di compilazione TypeScript

@Component({
  selector: 'app-mappa-meteo',
  templateUrl: './mappa-meteo.component.html',
  styleUrls: ['./mappa-meteo.component.css']
})
export class MappaMeteoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initMap(); // Inizializza la mappa quando il componente è pronto
  }

  initMap(): void {
    const map = L.map('map').setView([51.505, -0.09], 13); // Crea una mappa Leaflet centrata su una posizione iniziale

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { // Aggiungi un layer di base da OpenStreetMap
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  }

}
