import { Routes } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { TabContentComponent } from './tab-content/tab-content.component';

export const routes: Routes = [
    { path :'home', component: TabContentComponent, data: { tabIndex:0 }},
    { path :'pokemons', component: TabContentComponent, data: { tabIndex:1 }},
    { path :'qui-sommes-nous', component: TabContentComponent, data: { tabIndex:2 }},
    { path :'details/:id', component: PokemonDetailsComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
