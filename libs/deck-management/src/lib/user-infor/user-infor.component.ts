import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import {UserInfor, UserInforRes} from '../data-acess/models/user.model';
import {FolderService} from '../data-acess/services/folder-management.service';
import {take} from 'rxjs';
import {Subscription} from 'rxjs';

@Component({
  selector: 'exe-project-user-infor',
  templateUrl: './user-infor.component.html',
  styleUrls: ['./user-infor.component.scss'],
})
export class UserInforComponent implements OnInit, OnDestroy, AfterViewInit {
  userInfor!: UserInfor;
  subscription!: Subscription;
  constructor(private folderService: FolderService) {}
  ngOnInit(): void {
    this.subscription = this.folderService
      .getUserInfor()
      .pipe(take(1))
      .subscribe((data: UserInforRes) => (this.userInfor = data.data));
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngAfterViewInit(): void {
    // ...
  }
}
