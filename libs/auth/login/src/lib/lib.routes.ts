import {Route} from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';

export const authLoginRoutes: Route[] = [
  {path: '', pathMatch: 'full', component: LoginFormComponent},
];
