import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {authLoginRoutes} from './lib.routes';
import {LoginFormComponent} from './login-form/login-form.component';
import {SharedLayoutModule} from 'libs/shared/layout/src/index';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    SharedLayoutModule,
    RouterModule.forChild(authLoginRoutes),
  ],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent],
})
export class AuthLoginModule {}
