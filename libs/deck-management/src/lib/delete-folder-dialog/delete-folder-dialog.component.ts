import {Component, Inject, Optional} from '@angular/core';
import {Subscription} from 'rxjs';
import {Folder} from '../data-acess/models/folder.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';
import {FolderService} from '../data-acess/services/folder-management.service';
@Component({
  selector: 'exe-project-delete-folder-dialog',
  templateUrl: './delete-folder-dialog.component.html',
  styleUrls: ['./delete-folder-dialog.component.scss'],
})
export class DeleteFolderDialogComponent {
  deckSelected!: Folder;
  subscription!: Subscription;
  constructor(
    @Optional() private dialogRef: MatDialogRef<DeleteFolderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Folder,
    private folderService: FolderService,
    private toastrService: ToastrService,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  deleteFolder() {
    this.folderService.deleteFolder(this.data.id).subscribe((data: any) => {
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
