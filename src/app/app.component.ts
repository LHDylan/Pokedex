import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TabContentComponent } from "./tab-content/tab-content.component";
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterLink,
        RouterOutlet,
        HeaderComponent,
        PokemonDetailsComponent,
        TabContentComponent,
        FooterComponent,
    ]
})
export class AppComponent {
  title = 'Pokedex';
  
}