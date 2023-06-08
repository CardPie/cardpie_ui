import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {previewRoutes} from './lib.routes';
import {MainPageComponent} from './main-page/main-page.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {UserInforComponent} from './user-infor/user-infor.component';
import {FolderListManagementComponent} from './folder-list-management/folder-list-management.component';
import {DeckPreviewComponent} from './deck-preview/deck-preview.component';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {FlipCardItemComponent} from './flip-card-item/flip-card-item.component';
import {MatCardModule} from '@angular/material/card';
import {SlideCardComponent} from './slide-card/slide-card.component';
import {FormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    MatMenuModule,
    RouterModule.forChild(previewRoutes),
    RouterModule.forChild(previewRoutes),
  ],
  declarations: [
    MainPageComponent,
    SideBarComponent,
    UserInforComponent,
    FolderListManagementComponent,
    DeckPreviewComponent,
    NavBarComponent,
    FlipCardItemComponent,
    DeckPreviewComponent,
    SlideCardComponent,
  ],
})
export class PreviewModule {}
