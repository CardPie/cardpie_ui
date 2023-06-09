import {Component, Optional} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'exe-project-zalopay-dialog',
  templateUrl: './zalopay-dialog.component.html',
  styleUrls: ['./zalopay-dialog.component.scss'],
})
export class ZalopayDialogComponent {
  constructor(
    @Optional() private dialogRef: MatDialogRef<ZalopayDialogComponent>,
  ) {}
  onNoClick() {
    this.dialogRef.close();
  }
}
