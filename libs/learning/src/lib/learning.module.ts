import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {learningRoutes} from './lib.routes';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MainPageComponent} from './main-page/main-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RecommendSectionComponent} from './recommend-section/recommend-section.component';
import {CardItemsComponent} from './card-items/card-items.component';
import {MostCommonSectionComponent} from './most-common-section/most-common-section.component';
import {DestroyService} from 'libs/shared/services/destroy.service';
import {SeenRecentlyComponent} from './seen-recently/seen-recently.component';
import {SavedDeckComponent} from './saved-deck/saved-deck.component';
import {CreateNewDecksPopupComponent} from './create-new-decks-popup/create-new-decks-popup.component';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';
import {SearchSectionComponent} from './search-section/search-section.component';
import {SaveDeckDialogComponent} from './save-deck-dialog/save-deck-dialog.component';
import {AnnouncementDialogComponent} from './announcement-dialog/announcement-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forChild(learningRoutes),
    RouterModule.forChild(learningRoutes),
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    FormsModule,
    MatListModule,
    MatTabsModule,
    FlexLayoutModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatTooltipModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    RecommendSectionComponent,
    CardItemsComponent,
    MostCommonSectionComponent,
    SeenRecentlyComponent,
    SavedDeckComponent,
    CreateNewDecksPopupComponent,
    SearchSectionComponent,
    SaveDeckDialogComponent,
    AnnouncementDialogComponent,
  ],
  providers: [DestroyService],
  exports: [HeaderComponent, FooterComponent, MainPageComponent],
})
export class LearningModule {}
