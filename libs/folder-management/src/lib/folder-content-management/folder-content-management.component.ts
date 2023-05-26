import {Component, OnInit} from '@angular/core';
import {DetailFolder} from '../data-acess/models/folder.model';
import {FolderService} from '../data-acess/services/folder-management.service';
import {Subscription, take} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'exe-project-folder-content-management',
  templateUrl: './folder-content-management.component.html',
  styleUrls: ['./folder-content-management.component.scss'],
})
export class FolderContentManagementComponent implements OnInit {
  folderInformation!: DetailFolder;
  subscription!: Subscription;
  id: string | null = '';

  constructor(
    private folderService: FolderService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.subscription = this.folderService
      .getFolderDetail(this.id)
      .pipe(take(1))
      .subscribe((data) => (this.folderInformation = data));
  }
}
