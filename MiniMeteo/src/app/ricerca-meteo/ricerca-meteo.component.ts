import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ricerca-meteo',
  templateUrl: './ricerca-meteo.component.html',
  styleUrls: ['./ricerca-meteo.component.css']
})
export class RicercaMeteoComponent {

  query: string;
  results: any;

  constructor(private http: HttpClient) { }

  Token = 'c54dfd0095994fd1d87ced453f0d6a70';

  submit(queryInput: HTMLInputElement): void {
    const cityName = queryInput.value.trim();
    if (!cityName) {
      return;
    }

    this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.Token}&units=metric&lang=it`).subscribe(
      (data) => {
        this.results = data;
      },
      (error) => {
        console.error('Errore durante la richiesta HTTP:', error);
      }
    );
  }
}
