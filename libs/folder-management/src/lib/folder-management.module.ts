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
import {DeckSectionComponent} from './deck-section/deck-section.component';
import {MemorizeSectionComponent} from './memorize-section/memorize-section.component';
import {ForumSectionComponent} from './forum-section/forum-section.component';
import {TestSectionComponent} from './test-section/test-section.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';

import {AvatarBaseComponent} from './avatar-base/avatar-base.component';
import {FolderDetailComponent} from './folder-detail/folder-detail.component';
import {MatMenuModule} from '@angular/material/menu';
import {DialogComponent} from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {DeleteFolderDialogComponent} from './delete-folder-dialog/delete-folder-dialog.component';
import {CreateFolderDialogComponent} from './create-folder-dialog/create-folder-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatTabsModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    RouterModule.forChild(folderManagementRoutes),
  ],
  declarations: [
    MainPageComponent,
    FolderContentManagementComponent,
    SideBarComponent,
    UserInforComponent,
    FolderListManagementComponent,
    NavBarComponent,
    DeckSectionComponent,
    MemorizeSectionComponent,
    ForumSectionComponent,
    TestSectionComponent,
    AvatarBaseComponent,
    FolderDetailComponent,
    DialogComponent,
    DeleteFolderDialogComponent,
    CreateFolderDialogComponent,
  ],
  exports: [MainPageComponent, SideBarComponent],
})
export class FolderManagementModule {}
