import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';

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
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
