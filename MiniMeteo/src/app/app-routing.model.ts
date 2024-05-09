import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importa i componenti da associare ai percorsi
import { HomeComponent } from './home/home.component';
import { RicercaMeteoComponent } from './ricerca-meteo/ricerca-meteo.component';
import { MappaMeteoComponent } from './mappa-meteo/mappa-meteo.component';

// Definisci i percorsi dell'applicazione
const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' }, // Redireziona alla home se l'URL è vuoto
  { path: 'RicercaMeteo', component: RicercaMeteoComponent }, // Percorso per il componente RicercaMeteoComponent
  { path: 'Home', component: HomeComponent }, // Percorso per il componente HomeComponent
  {path: 'mappa-meteo', component: MappaMeteoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura il modulo di routing con i percorsi definiti
  exports: [RouterModule] // Esporta il modulo di routing per l'utilizzo in altri moduli
})
export class AppRoutingModule { } // Esporta la classe AppRoutingModule
