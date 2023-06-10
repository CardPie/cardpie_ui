import {Component, Optional} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'exe-project-announcement-dialog',
  templateUrl: './announcement-dialog.component.html',
  styleUrls: ['./announcement-dialog.component.scss'],
})
export class AnnouncementDialogComponent {
  constructor(
    @Optional() private dialogRef: MatDialogRef<AnnouncementDialogComponent>,
  ) {}
  close() {
    this.dialogRef.close();
  }
}
