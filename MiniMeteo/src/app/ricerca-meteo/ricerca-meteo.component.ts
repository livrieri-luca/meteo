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

  celsiusTemperatures: any;
  originalTemperatures: any;
  celsiusSet: boolean = false;
  lingua: string = 'it'; // Impostazione predefinita della lingua

  constructor(private http: HttpClient) { }

  Token = 'c54dfd0095994fd1d87ced453f0d6a70';

  submit(queryInput: HTMLInputElement): void {
    const cityName = queryInput.value.trim();
    if (!cityName) {
      return;
    }

    // Resetta il flag ogni volta che viene inviata una nuova richiesta
    this.celsiusSet = false;

    this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.Token}&units=metric&lang=${this.lingua}`).subscribe(
      (data) => {
        this.results = data;
        // Salva il valore iniziale della temperatura in Celsius solo una volta
        if (!this.celsiusSet) {
          this.celsiusTemperatures = {
            temp: data.main.temp,
            feels_like: data.main.feels_like,

            temp_min: data.main.temp_min,
            temp_max: data.main.temp_max
          };
          this.originalTemperatures = { ...this.celsiusTemperatures };
          this.celsiusSet = true;
        }
      },
      (error) => {
        console.error('Errore durante la richiesta HTTP:', error);
      }
    );
  }

  // Funzione per aggiornare la lingua quando viene selezionata dall'utente
  updateLanguage(lingua: string): void {
    this.lingua = lingua;
    // Esegui la ricerca solo se è stata selezionata una nuova lingua
    if (this.query) {
      this.submit(document.getElementById('newqueryInput') as HTMLInputElement);
    }
  }

  convertToCelsius() {
    if (this.results) {
      // Utilizza il valore iniziale della temperatura in Celsius solo una volta
      this.results.main.temp = this.originalTemperatures.temp;
      this.results.main.feels_like = this.originalTemperatures.feels_like;
      this.results.main.temp_min = this.originalTemperatures.temp_min;
      this.results.main.temp_max = this.originalTemperatures.temp_max;
    }
  }

  convertToFahrenheit() {
    if (this.results) {
      // Utilizza il valore iniziale della temperatura in Celsius per la conversione in Fahrenheit
      this.results.main.temp = this.toFahrenheit(this.celsiusTemperatures.temp);
      this.results.main.feels_like = this.toFahrenheit(this.celsiusTemperatures.feels_like);
      this.results.main.temp_min = this.toFahrenheit(this.celsiusTemperatures.temp_min);
      this.results.main.temp_max = this.toFahrenheit(this.celsiusTemperatures.temp_max);
    }
  }

  // Funzioni di utilità per la conversione di temperature
  toCelsius(fahrenheit: number): number {
    return Math.round((fahrenheit - 32) * 5 / 9);
  }

  toFahrenheit(celsius: number): number {
    return Math.round(celsius * 9 / 5 + 32);
  }
}
