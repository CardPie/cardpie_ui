import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {authLoginRoutes} from './lib.routes';
import {LoginFormComponent} from './login-form/login-form.component';
import {SharedLayoutModule} from 'libs/shared/layout/src/index';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedLayoutModule,
    RouterModule.forChild(authLoginRoutes),
  ],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent],
})
export class AuthLoginModule {}
