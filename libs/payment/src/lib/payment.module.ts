import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {paymentRoutes} from './lib.routes';
import {MainPageComponent} from './main-page/main-page.component';
import {LeftSectionComponent} from './left-section/left-section.component';
import {InformationPlanComponent} from './information-plan/information-plan.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {PlanSectionComponent} from './plan-section/plan-section.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import {ToastrModule} from 'ngx-toastr';
import {AnnualPlanSectionComponent} from './annual-plan-section/annual-plan-section.component';
import {MonthlyPlanSectionComponent} from './monthly-plan-section/monthly-plan-section.component';
import {FreeTrialPlanSectionComponent} from './free-trial-plan-section/free-trial-plan-section.component';
import {MomoDialogComponent} from './momo-dialog/momo-dialog.component';
import {ZalopayDialogComponent} from './zalopay-dialog/zalopay-dialog.component';

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
    MatDialogModule,
    ToastrModule,
    RouterModule.forChild(paymentRoutes),
    RouterModule.forChild(paymentRoutes),
  ],
  declarations: [
    MainPageComponent,
    LeftSectionComponent,
    InformationPlanComponent,
    LoginFormComponent,
    PlanSectionComponent,
    AnnualPlanSectionComponent,
    MonthlyPlanSectionComponent,
    FreeTrialPlanSectionComponent,
    MomoDialogComponent,
    ZalopayDialogComponent,
  ],
})
export class PaymentModule {}
