import {Route} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';

export const deckManagementRoutes: Route[] = [
  {path: ':id', pathMatch: 'full', component: MainPageComponent},
];
