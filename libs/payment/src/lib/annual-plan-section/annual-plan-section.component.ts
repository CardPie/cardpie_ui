import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MomoDialogComponent} from '../momo-dialog/momo-dialog.component';
import {ZalopayDialogComponent} from '../zalopay-dialog/zalopay-dialog.component';

@Component({
  selector: 'exe-project-annual-plan-section',
  templateUrl: './annual-plan-section.component.html',
  styleUrls: ['./annual-plan-section.component.scss'],
})
export class AnnualPlanSectionComponent {
  constructor(public dialog: MatDialog) {}
  openMomoDialog() {
    const dialogRef = this.dialog.open(MomoDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {});
  }
  openZaloPayDialog() {
    const dialogRef = this.dialog.open(ZalopayDialogComponent);
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
