import {Component} from '@angular/core';
import {FlashcardSet, Folder} from './main-page-model';
import {MatDialog} from '@angular/material/dialog';
import { CreateNewDecksPopupComponent } from '../create-new-decks-popup/create-new-decks-popup.component';

@Component({
  selector: 'exe-project-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  constructor(public dialog: MatDialog) {}

  openPopup() {
    const dialogRef = this.dialog.open(CreateNewDecksPopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  recentFlashcardSets: FlashcardSet[] = [
    {
      name: 'ISC-Full',
      cardCount: 394,
      creatorName: 'Thaycacac',
      creatorAvatar:
        'https://w7.pngwing.com/pngs/627/97/png-transparent-avatar-web-development-computer-network-avatar-game-web-design-heroes.png',
    },
    {
      name: 'Swd392',
      cardCount: 208,
      creatorName: 'Ptien',
      creatorAvatar:
        'https://w7.pngwing.com/pngs/627/97/png-transparent-avatar-web-development-computer-network-avatar-game-web-design-heroes.png',
    },
    {
      name: 'SWD392',
      cardCount: 198,
      creatorName: 'biggunnyso4',
      creatorAvatar:
        'https://w7.pngwing.com/pngs/627/97/png-transparent-avatar-web-development-computer-network-avatar-game-web-design-heroes.png',
    },
    {
      name: 'PRM-Tổng hợp',
      cardCount: 338,
      creatorName: 'Thaycacac',
      creatorAvatar:
        'https://w7.pngwing.com/pngs/627/97/png-transparent-avatar-web-development-computer-network-avatar-game-web-design-heroes.png',
    },
    {
      name: 'PRM-Tổng hợp',
      cardCount: 338,
      creatorName: 'Thaycacac',
      creatorAvatar:
        'https://w7.pngwing.com/pngs/627/97/png-transparent-avatar-web-development-computer-network-avatar-game-web-design-heroes.png',
    },
    {
      name: 'PRM-Tổng hợp',
      cardCount: 338,
      creatorName: 'Thaycacac',
      creatorAvatar:
        'https://w7.pngwing.com/pngs/627/97/png-transparent-avatar-web-development-computer-network-avatar-game-web-design-heroes.png',
    },
  ];
  createdFolders: Folder[] = [
    {
      name: 'Hieu',
      flashcardSetCount: 100,
    },
    {
      name: 'Hieu',
      flashcardSetCount: 100,
    },
  ];
}
