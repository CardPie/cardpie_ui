import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { authRegisterRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRegisterRoutes),
    RouterModule.forChild(authRegisterRoutes),
  ],
})
export class AuthRegisterModule {}
