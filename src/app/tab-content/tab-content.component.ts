import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { HomeComponent } from "../home/home.component";
import { PokemonListComponent } from "../pokemon-list/pokemon-list.component";
import { AboutComponent } from "../about/about.component";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tab-content',
  standalone: true,
  imports: [
    MatTabsModule,
    HomeComponent,
    PokemonListComponent,
    AboutComponent
  ],
  templateUrl: './tab-content.component.html',
  styleUrl: './tab-content.component.css'
})
export class TabContentComponent {

  public selectedIndex = 0;


  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      console.log(data.tabIndex);
      this.selectedIndex = data.tabIndex;
    });
  }

  onTabChange(event: any) {
    const tabRoutes = ["home", "pokemons", "qui-sommes-nous"];
    this.router.navigate([tabRoutes[event.index]]);
  }

}
