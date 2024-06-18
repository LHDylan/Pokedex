import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, RouterOutlet, ActivatedRoute } from '@angular/router';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    MatPaginatorModule,
    MatProgressBarModule,
    MatCardModule,
    MatChipsModule
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent implements OnInit {

  public offset = 0;
  public limit = 20;
  public totalCount = 0;
  public currentPage = 0;
  /**
   * L'array qui contient les pokemons
   */
  private pokemons: any[] = [];
  /**
   * L'array qui contient les détails de chaque pokemon
   */
  protected details: any[] = [];
  
  /**
   * Injection du service ApiService, Router
   */
  constructor(private service: ApiService, private router: Router) {}
  /**
   * Function qui récupère la liste des pokemons et les détails au lancement du composant
   */
  public ngOnInit() {
    this.loadPokemons();
  }
  /**
  * Function qui redirige vers le composant details
  */
  public getPageDetails(id: number) {
    this.router.navigate(['details', (id + this.offset)]);
  }

  public loadPokemons() {
    this.details = [];
    this.pokemons = [];
    this.service.getPokemons(this.offset, this.limit).subscribe((data: any) => {
      this.pokemons= data.results;
      this.totalCount = data.count;
      console.log(this.pokemons, this.totalCount);
      this.pokemons.map((pokemon :any) => {
        this.service.getPokemonDetails(pokemon.url).subscribe((details: any) => {
          this.details.push(details);
          console.log(this.details);
        }); 
        // console.log(this.pokemons, this.details);
      });
    });    
  }

  public onPageChange(event: any) {
    this.limit = event.pageSize;
    this.offset = event.pageSize * event.pageIndex;
    console.log(this.offset, this.limit, this.totalCount);
    this.loadPokemons();
  }
}
