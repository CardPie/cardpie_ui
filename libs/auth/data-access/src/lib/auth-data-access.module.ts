import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { authDataAccessRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authDataAccessRoutes),
    RouterModule.forChild(authDataAccessRoutes),
  ],
})
export class AuthDataAccessModule {}
