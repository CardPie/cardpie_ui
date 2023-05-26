import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {deckManagementRoutes} from './lib.routes';
import {MainPageComponent} from './main-page/main-page.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {UserInforComponent} from './user-infor/user-infor.component';
import {FolderListManagementComponent} from './folder-list-management/folder-list-management.component';
import {DeckDetailComponent} from './deck-detail/deck-detail.component';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {CreateCardItemComponent} from './create-card-item/create-card-item.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatTabsModule,
    FlexLayoutModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    RouterModule.forChild(deckManagementRoutes),
    RouterModule.forChild(deckManagementRoutes),
  ],
  declarations: [
    MainPageComponent,
    SideBarComponent,
    NavBarComponent,
    UserInforComponent,
    FolderListManagementComponent,
    DeckDetailComponent,
    CreateCardItemComponent,
  ],
})
export class DeckManagementModule {}
