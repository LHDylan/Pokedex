import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';
  private http: HttpClient = inject(HttpClient);

  public getPokemons(): Observable<any>{
    return this.http.get(this.baseUrl);  
  }

  public getPokemon( pokemonName : string): Observable<any>{
    return this.http.get(this.baseUrl + '/' + pokemonName);  
  }

  
}
