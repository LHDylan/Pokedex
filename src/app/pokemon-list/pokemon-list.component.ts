import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink,
    MatPaginatorModule
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})

export class PokemonListComponent implements OnInit {
  /**
   * Injection du service ApiService
   */
  private service: ApiService = inject(ApiService);
  /**
   * Injection du service Router
   */
  private router = inject(Router);
  /**
   * L'array qui contient les pokemons 
   */
  protected pokemons: any[] = [];
  /**
   * L'Object qui contient les informations d'un pokemon
   */
  protected pokemon: any = {};
  /**
   * Function qui récupère la liste des pokemons au lancement du composant
   */
  public ngOnInit() {
    this.service.getList().subscribe((data: any) => {
      this.pokemons = data;
    this.service.getDataDetails(this.pokemons[0].url).subscribe((dataUrl: any) => {
      console.log(dataUrl);
    })
    });
  }

  /**
   * Function qui redirige vers le composant details
   */
  public getDetails(id: number) {
    // console.log(id);
    // console.log(this.pokemons[id])
    this.pokemon = this.pokemons[id];
    this.router.navigate(['details', id]);
  }
}