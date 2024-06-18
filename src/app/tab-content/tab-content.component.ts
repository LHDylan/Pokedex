import {Component, OnInit } from '@angular/core';
import { MatTabChangeEvent, MatTabsModule } from '@angular/material/tabs';
import { HomeComponent } from "../home/home.component";
import { PokemonListComponent } from "../pokemon-list/pokemon-list.component";
import { AboutComponent } from "../about/about.component";
import { Router } from '@angular/router';

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
export class TabContentComponent{

  // public tabIndex = 0;

  // constructor(private router: Router) {}

// ngOnInit() {
//     this.tabIndex = this.router.url === '/home' ? 0 : 1;
//     this.tabIndex = this.router.url === '/pokemons' ? 1 : this.tabIndex;
//     this.tabIndex = this.router.url === '/qui-sommes-nous' ? 2 : this.tabIndex;
// }

//   onTabChange(event : MatTabChangeEvent) {
    
//     console.log('Nouvelle tab : ' + event.index)
//     // Update the URL based on the selected tab
//     switch (event.index) {
//       case 0:
//         console.log(this.tabIndex);
//         this.router.navigate(['home']);
//         break;
//         case 1:
//           console.log(this.tabIndex);
//           this.router.navigate(['pokemons']);
//           break;
//           case 2:
//             console.log(this.tabIndex);
//             this.router.navigate(['qui-sommes-nous']);
//             break;
//             default:
//               break;
//             }
//   }
}
