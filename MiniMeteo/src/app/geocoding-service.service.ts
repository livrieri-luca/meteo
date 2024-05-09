import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {
  private apiKey = 'c54dfd0095994fd1d87ced453f0d6a70'; // Sostituisci con la tua chiave API
  private apiUrl = 'https://api.openweathermap.org/geo/1.0/direct';

  constructor(private http: HttpClient) { }

  getCoordinates(cityName: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${cityName}&limit=1&appid=${this.apiKey}`);
  }
}
