import { Component , OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'libs/auth/data-access/src/lib/services/auth.service';
import { LearningService } from '../data-access/services/learning.service';
import { Subscription, take } from 'rxjs';
import { UserInfor } from 'libs/folder-management/src/lib/data-acess/models/user.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'exe-project-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchTerm: any;
  subscription!: Subscription;
  constructor(
    private authService: AuthService,
    private router: Router,
    private learningService: LearningService,
    public dialog: MatDialog
  ) { }
  @Input() openPopup!: () => void;
  userInfor!: UserInfor;
  ngOnInit(): void {
    this.subscription = this.learningService
      .getUserInfor()
      .pipe(take(1))
      .subscribe((data) => {
        this.userInfor = data.data;
      });
  }
  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
