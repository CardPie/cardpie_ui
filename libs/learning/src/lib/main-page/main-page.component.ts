import {Component} from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import {CreateNewDecksPopupComponent} from '../create-new-decks-popup/create-new-decks-popup.component';

@Component({
  selector: 'exe-project-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  constructor(private dialog: MatDialog) {}

  openPopup() {
    const dialogConfig = new MatDialogConfig();
    const dialogRef: MatDialogRef<CreateNewDecksPopupComponent> =
      this.dialog.open(CreateNewDecksPopupComponent, {
        position: {top: '87px'},
        ...dialogConfig,
      });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log(`Dialog result: ${result}`);
    });
  }
}
