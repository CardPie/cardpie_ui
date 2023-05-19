import { Component } from '@angular/core';
import { FlashcardSet, Folder } from './main-page-model';

@Component({
  selector: 'exe-project-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  recentFlashcardSets: FlashcardSet[] = [
    {
      name: "Hieu",
      cardCount: 100,
      creatorName: "Hieunmt",
      creatorAvatar: ""
    },
    {
      name: "Hieu",
      cardCount: 100,
      creatorName: "Hieunmt",
      creatorAvatar: ""
    }, 
    {
      name: "Hieu",
      cardCount: 100,
      creatorName: "Hieunmt",
      creatorAvatar: ""
    }, 
    {
      name: "Hieu",
      cardCount: 100,
      creatorName: "Hieunmt",
      creatorAvatar: ""
    },
    {
      name: "Hieu",
      cardCount: 100,
      creatorName: "Hieunmt",
      creatorAvatar: ""
    },
    {
      name: "Hieu",
      cardCount: 100,
      creatorName: "Hieunmt",
      creatorAvatar: ""
    },
  ];
  createdFolders: Folder[] = [
    {
      name: "Hieu",
      flashcardSetCount: 100
    },
    {
      name: "Hieu",
      flashcardSetCount: 100
    },
    {
      name: "Hieu",
      flashcardSetCount: 100
    }, {
      name: "Hieu",
      flashcardSetCount: 100
    }, {
      name: "Hieu",
      flashcardSetCount: 100
    },
  ];
}
