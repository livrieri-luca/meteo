import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { GeocodingService } from '../geocoding-service.service';

@Component({
  selector: 'app-mappa-meteo',
  templateUrl: './mappa-meteo.component.html',
  styleUrls: ['./mappa-meteo.component.css']
})
export class MappaMeteoComponent implements OnInit {
  cityName: string = ''; // Variabile per il nome della città
  map: any; // Variabile per la mappa

  constructor(private geocodingService: GeocodingService) { }

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    const ItalyLat = 41.8719; // Latitudine approssimativa del centro dell'Italia
    const ItalyLon = 12.5674; // Longitudine approssimativa del centro dell'Italia

    this.map = L.map('map').setView([ItalyLat, ItalyLon], 6); // Imposta la vista sulla posizione approssimativa dell'Italia con zoom 6

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map); // Aggiungi un layer di mappa di OpenStreetMap

    // Aggiungi un marker con popup al centro dell'Italia
    L.marker([ItalyLat, ItalyLon]).addTo(this.map)
      .bindPopup('Italia')
      .openPopup();
  }

  updateMap(): void {
    if (!this.cityName) return; // Se il nome della città non è specificato, esci dalla funzione

    this.geocodingService.getCoordinates(this.cityName).subscribe(
      (coordinates) => {
        const lat = coordinates.lat; // Latitudine della città
        const lon = coordinates.lon; // Longitudine della città

        // Verifica che le coordinate siano valide prima di impostare la vista della mappa
        if (lat !== undefined && lon !== undefined) {
          this.map.setView([lat, lon], 13); // Imposta la vista della mappa con le coordinate della città e lo zoom desiderato

          // Rimuovi il marker precedente e aggiungi il nuovo marker con popup
          this.map.eachLayer((layer: any) => {
            if (layer instanceof L.Marker) {
              this.map.removeLayer(layer);
            }
          });
          L.marker([lat, lon]).addTo(this.map)
            .bindPopup('A pretty CSS popup.<br> Easily customizable.')
            .openPopup();
        } else {
          console.error('Coordinate non valide per la città specificata.');
        }
      },
      (error) => {
        console.error('Errore nel recupero delle coordinate:', error);
      }
    );
  }

  searchCity(): void {
    this.updateMap(); // Aggiorna la mappa con la città selezionata
  }
}
