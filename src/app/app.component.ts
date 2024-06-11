import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pokedex';

  constructor(private apiService: ApiService) {
    this.apiService.getPokemons().subscribe((res: any) => console.log(res));
    // this.apiService.getPokemon().subscribe((res: any) => console.log(res));
  }
currentPokemonUrl: any = {};
CurrentPokemonUrlSpriteOne : string = '';
  getInputName(name: string) {
    data: this.apiService.getPokemon(name).subscribe((res: any) => {
      this.currentPokemonUrl = res;
      this.CurrentPokemonUrlSpriteOne = this.currentPokemonUrl.sprites.front_default;
    });
  }
}
