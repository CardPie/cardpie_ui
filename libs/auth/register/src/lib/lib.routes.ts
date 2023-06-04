import {Route} from '@angular/router';
import {SignUpFormComponent} from './sign-up-form/sign-up-form.component';

export const authRegisterRoutes: Route[] = [
  {path: '', pathMatch: 'full', component: SignUpFormComponent},
];
