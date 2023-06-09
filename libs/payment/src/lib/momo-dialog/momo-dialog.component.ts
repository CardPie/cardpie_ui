import {Component, Optional} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'exe-project-momo-dialog',
  templateUrl: './momo-dialog.component.html',
  styleUrls: ['./momo-dialog.component.scss'],
})
export class MomoDialogComponent {
  constructor(
    @Optional() private dialogRef: MatDialogRef<MomoDialogComponent>,
  ) {}
  onNoClick() {
    this.dialogRef.close();
  }
}
