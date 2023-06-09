import {Component, Input} from '@angular/core';
import {Desk} from '../data-access/models/desk.model';
import {Router} from '@angular/router';
import {LearningService} from '../data-access/services/learning.service';
import {Subscription} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {SaveDeckDialogComponent} from '../save-deck-dialog/save-deck-dialog.component';
@Component({
  selector: 'exe-project-card-items',
  templateUrl: './card-items.component.html',
  styleUrls: ['./card-items.component.scss'],
})
export class CardItemsComponent {
  @Input() desk!: Desk;
  subscription!: Subscription;
  status_code: number = 0;
  constructor(
    private router: Router,
    private learningService: LearningService,
    public dialog: MatDialog,
  ) {}
  learning(deck: Desk) {
    const id = deck.id;
    this.subscription = this.learningService
      .triggerCountView(id)
      .subscribe((res) => {
        res.status_code = this.status_code;
      });
    this.router.navigate(['learning', id]);
  }
  savePopup(deck: Desk) {
    const dialogRef = this.dialog.open(SaveDeckDialogComponent, {
      data: deck,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result.status_code == 200) {
        window.location.reload();
      }
    });
  }
}
