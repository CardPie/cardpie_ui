import {Route} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';

export const previewRoutes: Route[] = [
  {path: ':id', pathMatch: 'full', component: MainPageComponent},
];
