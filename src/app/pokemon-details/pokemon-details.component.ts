import { Component } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';


@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css',
})
export class PokemonDetailsComponent {
  /**
   * L'object qui contient les informations d'un pokemon
   */
  protected details: any | boolean = false;
  /**
   * Injection du service ApiService, ActivatedRoute
   */
  constructor(private service: ApiService, private route: ActivatedRoute) {}
  /**
   * Function qui récupère les informations d'un pokemon au lancement du composant
   */
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = Number(params['id']) + 1;
      const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
      this.service.getPokemonDetails(url).subscribe((details: any) => {
        this.details = details;
        console.log(this.details);
      });
    });
  }
}

