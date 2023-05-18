import {Route} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';

export const learningRoutes: Route[] = [
  {path: '', pathMatch: 'full', component: MainPageComponent},
];
