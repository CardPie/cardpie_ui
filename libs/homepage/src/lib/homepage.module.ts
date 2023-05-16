import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {homepageRoutes} from './lib.routes';
import {MainBannerComponent} from './main-banner/main-banner.component';
import {HomepageComponent} from './homepage/homepage.component';
import {SharedLayoutModule} from 'libs/shared/layout/src/index';
import {MatButtonModule} from '@angular/material/button';
import {ServicesComponent} from './services/services.component';
import {ProjectsComponent} from './projects/projects.component';
import {InfosComponent} from './infos/infos.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
@NgModule({
  imports: [
    CommonModule,
    SharedLayoutModule,
    MatButtonModule,
    RouterModule.forChild(homepageRoutes),
  ],
  declarations: [
    MainBannerComponent,
    HomepageComponent,
    ServicesComponent,
    ProjectsComponent,
    InfosComponent,
    ContactUsComponent,
  ],
})
export class HomepageModule {}
