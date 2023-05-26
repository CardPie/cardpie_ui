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
import {MatDialogModule} from '@angular/material/dialog';
import {DialogComponent} from './utils/dialog/dialog.component';
import {ToastrModule} from 'ngx-toastr';

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
    MatDialogModule,
    ToastrModule,
    RouterModule.forChild(authLoginRoutes),
  ],
  declarations: [LoginFormComponent, DialogComponent],
  exports: [LoginFormComponent],
})
export class AuthLoginModule {}
