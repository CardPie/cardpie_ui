import {Route} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {InformationPlanComponent} from './information-plan/information-plan.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {AnnualPlanSectionComponent} from './annual-plan-section/annual-plan-section.component';
import {FreeTrialPlanSectionComponent} from './free-trial-plan-section/free-trial-plan-section.component';
import {MonthlyPlanSectionComponent} from './monthly-plan-section/monthly-plan-section.component';
import {AuthPayMentGuard} from './guards/auth.guard';

export const paymentRoutes: Route[] = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        component: InformationPlanComponent,
      },
      {
        path: 'login',
        component: LoginFormComponent,
      },
      {
        path: 'annual',
        component: AnnualPlanSectionComponent,
        canActivate: [AuthPayMentGuard],
      },
      {
        path: 'trial',
        component: FreeTrialPlanSectionComponent,
        canActivate: [AuthPayMentGuard],
      },
      {
        path: 'monthly',
        component: MonthlyPlanSectionComponent,
        canActivate: [AuthPayMentGuard],
      },
    ],
  },
];
