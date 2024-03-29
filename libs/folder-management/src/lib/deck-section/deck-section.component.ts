import {Component, Input, OnInit} from '@angular/core';
import {Desk, DetailFolder} from '../data-acess/models/folder.model';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'exe-project-deck-section',
  templateUrl: './deck-section.component.html',
  styleUrls: ['./deck-section.component.scss'],
})
export class DeckSectionComponent implements OnInit {
  @Input() deskList: Desk[] = [];
  @Input() folder!: DetailFolder;
  idFolder: string = '';

  constructor(
    private router: Router,

    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {}

  createNewDesk() {
    const id = this.folder.data.id;
    this.router.navigate(['deck', id]);
  }
  openDialog(deck: Desk) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: deck,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result.status_code == 200) {
        window.location.reload();
      }
    });
  }

  learning(deck: Desk) {
    const id = deck.id;
    this.router.navigate(['learning', id]);
  }
}
