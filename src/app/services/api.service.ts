import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http: HttpClient = inject(HttpClient);
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  public getList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
