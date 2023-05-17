import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {learningRoutes} from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(learningRoutes),
    RouterModule.forChild(learningRoutes),
  ],
})
export class LearningModule {}
