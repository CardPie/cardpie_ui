import {Component, Inject} from '@angular/core';
import {Desk} from '../data-acess/models/folder.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FolderService} from '../data-acess/services/folder-management.service';
import {Subscription} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'exe-project-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  deckSelected!: Desk;
  subscription!: Subscription;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Desk,
    private folderService: FolderService,
    private toastrService: ToastrService,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  deleteDeck() {
    this.folderService.deleteDeck(this.data.id).subscribe((data: any) => {
      if (data.status_code == 200) {
        this.toastrService.success('Delete successfully !');
        this.dialogRef.close(data);
      } else {
        this.toastrService.error('Something wrong, please try again!');
        this.dialogRef.close();
      }
    });
  }
}
