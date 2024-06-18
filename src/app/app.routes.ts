import { Routes } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { TabContentComponent } from './tab-content/tab-content.component';
import { HomeComponent } from './home/home.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path :'home', component: HomeComponent},
    { path :'pokemons', component: PokemonListComponent},
    { path :'qui-sommes-nous', component: AboutComponent},
    { path :'details/:id', component: PokemonDetailsComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
