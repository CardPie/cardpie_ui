import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';
import {AuthGuard} from 'libs/shared/guards/auth.guard';
import {RedirectGuard} from 'libs/shared/guards/redirect.guard';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('libs/homepage/src/index').then((m) => m.HomepageModule),
    canLoad: [RedirectGuard],
  },
  {
    path: 'login',
    pathMatch: 'full',
    loadChildren: () =>
      import('libs/auth/login/src/index').then((m) => m.AuthLoginModule),
  },
  {
    path: 'register',
    pathMatch: 'full',
    loadChildren: () =>
      import('libs/auth/register/src/index').then((m) => m.AuthRegisterModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('libs/learning/src/index').then((m) => m.LearningModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'folders',
    loadChildren: () =>
      import('libs/folder-management/src/index').then(
        (m) => m.FolderManagementModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'learning',
    loadChildren: () =>
      import('libs/preview/src/index').then((m) => m.PreviewModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'deck',
    loadChildren: () =>
      import('libs/deck-management/src/index').then(
        (m) => m.DeckManagementModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'payment',
    loadChildren: () =>
      import('libs/Payment/src/index').then((m) => m.PaymentModule),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('libs/notfoundpage/src/index').then((m) => m.NotfoundpageModule),
  },
  {path: '**', redirectTo: 'not-found'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
