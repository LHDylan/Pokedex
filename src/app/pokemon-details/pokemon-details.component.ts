import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css',
})
export class PokemonDetailsComponent {

  /**
   * L'object qui contient les informations d'un pokemon
   */
  protected pokemon: any = {};
  /**
   * Les propriétés du pokémon contenues dans sa propriété url
   */
  protected details: any | boolean = false;
  /**
   * Injection du service ApiService
   * Injection du service ActivatedRoute
   */
  constructor(private service: ApiService, private route: ActivatedRoute) {}
  /**
   * Function qui récupère les informations d'un pokemon au lancement du composant
   */
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.service.getList().subscribe((data: any) => {
        this.pokemon = data[id];
      });
      this.service.getDataDetails(this.pokemon.url).subscribe((data: any) => {
        this.details = data;
        console.log(this.pokemon);
        console.log(this.details);
      });
    });
  }
}
