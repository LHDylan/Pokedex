import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  /**
   * Injection du service HttpClient
   */
  private http: HttpClient = inject(HttpClient);
  /**
   * Url de l'API
   */
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  /**
   * Requête de l'API
   */
  public getPokemons(): Observable<any> {
      return this.http.get(`${this.baseUrl}?offset=0&limit=20`).pipe(map((data: any) => {
        return data.results; 
      }));
  }
  /**
   * Function qui renvoie les informations d'un pokemon
   */
  public getPokemonDetails(url: string): Observable<any> {
    return  this.http.get(url).pipe(map((data: any) => {
      return data;
    }));
  }
}