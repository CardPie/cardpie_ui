import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {homepageRoutes} from './lib.routes';
import {MainBannerComponent} from './main-banner/main-banner.component';
import {HomepageComponent} from './homepage/homepage.component';
import {SharedLayoutModule} from 'libs/shared/layout/src/index';

import {ServicesComponent} from './services/services.component';
import {ProjectsComponent} from './projects/projects.component';
import {InfosComponent} from './infos/infos.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MainBannerV2Component} from './main-banner-v2/main-banner-v2.component';
import {CardpieIntroduceComponent} from './cardpie-introduce/cardpie-introduce.component';
import {PremiumIntroductionComponent} from './premium-introduction/premium-introduction.component';
import {ChoosePlanPremiumComponent} from './choose-plan-premium/choose-plan-premium.component';
import {BottomBannerCardpieComponent} from './bottom-banner-cardpie/bottom-banner-cardpie.component';
import {FooterHomeComponent} from './footer-home/footer-home.component';
import {TeamInfomationComponent} from './team-infomation/team-infomation.component';

@NgModule({
  imports: [
    CommonModule,
    SharedLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    RouterModule.forChild(homepageRoutes),
  ],
  declarations: [
    MainBannerComponent,
    HomepageComponent,
    ServicesComponent,
    ProjectsComponent,
    InfosComponent,
    ContactUsComponent,
    MainBannerV2Component,
    CardpieIntroduceComponent,
    PremiumIntroductionComponent,
    ChoosePlanPremiumComponent,
    BottomBannerCardpieComponent,
    FooterHomeComponent,
    TeamInfomationComponent,
  ],
})
export class HomepageModule {}
