import {Component, OnDestroy, OnInit} from '@angular/core';
import {FolderService} from '../data-acess/services/folder-management.service';
import {take} from 'rxjs';
import {Subscription} from 'rxjs';
import {Folder} from '../data-acess/models/folder.model';
import {Router} from '@angular/router';
@Component({
  selector: 'exe-project-folder-list-management',
  templateUrl: './folder-list-management.component.html',
  styleUrls: ['./folder-list-management.component.scss'],
})
export class FolderListManagementComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  folderList: Folder[] = [];
  total_count: number = 0;

  colorArray = [
    '#e72a9b',
    '#4441db',
    '#41db6f',
    '#bfdb41',
    '#dba541',
    '#db4141',
    '#41db9b',
  ];
  constructor(private folderService: FolderService, private router: Router) {}
  ngOnInit(): void {
    this.subscription = this.folderService
      .getFolderOfUser()
      .pipe(take(2))
      .subscribe(
        (data) => (
          (this.folderList = data.data), (this.total_count = data.total_count)
        ),
      );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  getFolder(folder: Folder) {
    this.router.navigate(['/folders', folder.id]);
  }
}
