import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { authLoginRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authLoginRoutes),
    RouterModule.forChild(authLoginRoutes),
  ],
})
export class AuthLoginModule {}
