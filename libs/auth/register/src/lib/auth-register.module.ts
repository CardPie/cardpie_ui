import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {authRegisterRoutes} from './lib.routes';
import {SignUpFormComponent} from './sign-up-form/sign-up-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRegisterRoutes),
    RouterModule.forChild(authRegisterRoutes),
  ],
  declarations: [SignUpFormComponent],
})
export class AuthRegisterModule {}
