import {Route} from '@angular/router';
import {LoginFormComponent} from 'libs/auth/login/src/lib/login-form/login-form.component';
export const SharedLayoutRoutingModule: Route[] = [
  {path: 'login', pathMatch: 'full', component: LoginFormComponent},
];
