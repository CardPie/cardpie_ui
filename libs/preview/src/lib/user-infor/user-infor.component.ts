import {Component, OnInit, OnDestroy} from '@angular/core';
import {UserInfor} from '../data-acess/models/user.model';
import {FolderService} from '../data-acess/services/folder-management.service';
import {take} from 'rxjs';
import {Subscription} from 'rxjs';

@Component({
  selector: 'exe-project-user-infor',
  templateUrl: './user-infor.component.html',
  styleUrls: ['./user-infor.component.scss'],
})
export class UserInforComponent implements OnInit, OnDestroy {
  userInfor!: UserInfor;
  subscription!: Subscription;
  constructor(private folderService: FolderService) {}
  ngOnInit(): void {
    this.subscription = this.folderService
      .getUserInfor()
      .pipe(take(1))
      .subscribe((data) => (this.userInfor = data.data));
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
