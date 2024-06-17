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
  public getPokemons(offset: number, limit: number): Observable<any> {
      return this.http.get(`${this.baseUrl}?offset=${offset}&limit=${limit}`).pipe(map((data: any) => {
        return data;
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