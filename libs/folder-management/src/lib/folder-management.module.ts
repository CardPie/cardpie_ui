import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {folderManagementRoutes} from './lib.routes';
import {MainPageComponent} from './main-page/main-page.component';
import {FolderContentManagementComponent} from './folder-content-management/folder-content-management.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {UserInforComponent} from './user-infor/user-infor.component';
import {FolderListManagementComponent} from './folder-list-management/folder-list-management.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule,
    RouterModule.forChild(folderManagementRoutes),
    RouterModule.forChild(folderManagementRoutes),
  ],
  declarations: [
    MainPageComponent,
    FolderContentManagementComponent,
    SideBarComponent,
    UserInforComponent,
    FolderListManagementComponent,
    NavBarComponent,
  ],
  exports: [MainPageComponent],
})
export class FolderManagementModule {}
