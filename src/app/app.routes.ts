import { Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

export const routes: Routes = [
    { path: 'index', component: PokemonListComponent},
    { path :'details', component: PokemonDetailsComponent},
    { path: '', redirectTo: 'index', pathMatch: 'full' }
];
