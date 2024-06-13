import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

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
   * Propriété qui contient les données ([array des objects {pokémon}])
   */
  private data: any | boolean = false;
  /**
   * Requête de l'API
   */
  private getData(): Observable<any> {
      return this.http.get(`${this.baseUrl}?offset=0&limit=151`).pipe(map((data: any) => {
        this.data = data.results;
        // console.log(this.data);
        return this.data;
      }));
  }
  /**
   * Function qui renvoie la liste des pokemons à travers les différents composants
   */
  public getList(): Observable<any> {
    // console.log(this.data);
    if (this.data == false) {
      return this.getData();
    }
    return of(this.data);
  }

  /**
   * Function qui renvoie les informations d'un pokemon
   */
  public getDataDetails(url: string): Observable<any> {
    return  this.http.get(url).pipe(map((data: any) => {
      return data;
    }));
  }
}