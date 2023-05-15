import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homepageRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homepageRoutes),
    RouterModule.forChild(homepageRoutes),
  ],
})
export class HomepageModule {}
