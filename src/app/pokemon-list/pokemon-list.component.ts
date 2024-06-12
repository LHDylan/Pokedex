import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CardComponent } from './layout/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent implements OnInit {
  private service: ApiService = inject(ApiService);

  ngOnInit() {
    this.fetchData();
  }

  pokemons : any[]= [];
  fetchData() {
    this.service.getList().subscribe((data) => {
      this.pokemons = data.results;
      console.log(this.pokemons);
    });
  }
}

// https://www.w3schools.com/howto/howto_css_cards.asp
// https://angular.fr/lifecycle/ng-on-init
