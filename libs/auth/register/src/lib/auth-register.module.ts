import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {authRegisterRoutes} from './lib.routes';
import {SignUpFormComponent} from './sign-up-form/sign-up-form.component';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ToastrModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(authRegisterRoutes),
  ],
  declarations: [SignUpFormComponent],
})
export class AuthRegisterModule {}
