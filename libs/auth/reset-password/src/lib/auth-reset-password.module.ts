import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { authResetPasswordRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authResetPasswordRoutes),
    RouterModule.forChild(authResetPasswordRoutes),
  ],
})
export class AuthResetPasswordModule {}
