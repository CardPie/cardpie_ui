import {Route} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {FolderContentManagementComponent} from './folder-content-management/folder-content-management.component';
import {AvatarBaseComponent} from './avatar-base/avatar-base.component';
import {FolderDetailComponent} from './folder-detail/folder-detail.component';

export const folderManagementRoutes: Route[] = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        component: FolderContentManagementComponent,
        children: [
          {path: '', component: AvatarBaseComponent},
          {path: ':id', component: FolderDetailComponent},
        ],
      },
    ],
  },
];
