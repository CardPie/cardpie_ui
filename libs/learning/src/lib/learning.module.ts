import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {learningRoutes} from './lib.routes';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MainPageComponent} from './main-page/main-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forChild(learningRoutes),
    RouterModule.forChild(learningRoutes),
  ],
  declarations: [HeaderComponent, FooterComponent, MainPageComponent],
  exports: [HeaderComponent, FooterComponent, MainPageComponent],
})
export class LearningModule {}
