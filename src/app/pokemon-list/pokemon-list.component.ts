import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, RouterLink, MatPaginatorModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent implements OnInit {
  
  /**
   * Injection du service ApiService, Router
   */
  constructor(private service: ApiService, private router: Router) {}
  /**
   * L'array qui contient les pokemons
   */
  private pokemons: any[] = [];
  /**
   * L'array qui contient les détails de chaque pokemon
   */
  protected details: any[] = [];
  /**
   * Function qui récupère la liste des pokemons et les détails au lancement du composant
   */
  public ngOnInit() {
    this.service.getPokemons().subscribe((data: any) => {
      this.pokemons = data;
      this.pokemons.map((pokemon :any) => {
        this.service.getPokemonDetails(pokemon.url).subscribe((details: any) => {
          this.details.push(details);
        }); 
      });
      // console.log(this.pokemons, this.details);
    });
  }
  /**
  * Function qui redirige vers le composant details
  */
  public getPageDetails(id: number) {
    this.router.navigate(['details', id]);
  }  
}
