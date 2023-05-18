import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {AuthGuard} from 'libs/shared/guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('libs/homepage/src/index').then((m) => m.HomepageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('libs/auth/login/src/index').then((m) => m.AuthLoginModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('libs/learning/src/index').then((m) => m.LearningModule),
    canActivate: [AuthGuard],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
