import {Route} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {SearchSectionComponent} from './search-section/search-section.component';

export const learningRoutes: Route[] = [
  {path: '', pathMatch: 'full', component: MainPageComponent},
  {path: 'search', pathMatch: 'full', component: SearchSectionComponent},
];
