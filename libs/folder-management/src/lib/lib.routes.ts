import {Route} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {CardManagementComponent} from './card-management/card-management.component';
import {FolderContentManagementComponent} from './folder-content-management/folder-content-management.component';

export const folderManagementRoutes: Route[] = [
  {
    path: '',
    component: MainPageComponent,
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: FolderContentManagementComponent,
      },
      {path: ':id', component: CardManagementComponent},
    ],
  },
];
