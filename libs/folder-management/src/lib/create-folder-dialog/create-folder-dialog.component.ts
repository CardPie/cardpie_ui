import {Component, OnInit, Optional} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {LearningService} from 'libs/learning/src/lib/data-access/services/learning.service';
import {INewFolder} from 'libs/learning/src/lib/data-access/models/folder.model';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'exe-project-create-folder-dialog',
  templateUrl: './create-folder-dialog.component.html',
  styleUrls: ['./create-folder-dialog.component.scss'],
})
export class CreateFolderDialogComponent implements OnInit {
  folderName: string = '';
  constructor(
    @Optional() private dialogRef: MatDialogRef<CreateFolderDialogComponent>,
    private toastr: ToastrService,
    private learningService: LearningService,
  ) {}
  ngOnInit(): void {}
  onSubmit() {
    console.log('hehe', this.folderName);
    if (this.folderName === '') {
      this.toastr.warning('Please input name of folder!');
    } else {
      const FolderBody: INewFolder = {
        folder_name: this.folderName,
        is_public: true,
      };
      this.learningService.createNewFolder(FolderBody).subscribe((data) => {
        if (data.status_code == 200) {
          this.toastr.success('Create successfully!');
          window.location.reload();
        } else {
          this.toastr.warning('Something wrongs, please try again!');
        }
      });
    }
  }
}
