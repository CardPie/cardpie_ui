import {Component, Inject, Optional} from '@angular/core';
import {Desk} from '../data-access/models/desk.model';
import {Subscription} from 'rxjs';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {LearningService} from '../data-access/services/learning.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'exe-project-save-deck-dialog',
  templateUrl: './save-deck-dialog.component.html',
  styleUrls: ['./save-deck-dialog.component.scss'],
})
export class SaveDeckDialogComponent {
  deckSelected!: Desk;
  subscription!: Subscription;
  constructor(
    @Optional() private dialogRef: MatDialogRef<SaveDeckDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Desk,
    private learngService: LearningService,
    private toastrService: ToastrService,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  saveDeck() {
    this.learngService.saveDeck(this.data.id).subscribe((data: any) => {
      if (data.status_code == 200) {
        this.toastrService.success('Save successfully !');
        this.dialogRef.close(data);
      } else {
        this.toastrService.error('Something wrong, please try again!');
        this.dialogRef.close();
      }
    });
  }
}
