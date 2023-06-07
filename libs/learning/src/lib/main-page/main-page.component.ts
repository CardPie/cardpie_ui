import {Component} from '@angular/core';
import {FlashcardSet, Folder} from './main-page-model';
import {MatDialog} from '@angular/material/dialog';
import {CreateNewDecksPopupComponent} from '../create-new-decks-popup/create-new-decks-popup.component';

@Component({
  selector: 'exe-project-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  constructor(private dialog: MatDialog) {}

  openPopup() {
    const dialogRef = this.dialog.open(CreateNewDecksPopupComponent);

    dialogRef.afterClosed().subscribe((result) => {
      // console.log(`Dialog result: ${result}`);
    });
  }
}
