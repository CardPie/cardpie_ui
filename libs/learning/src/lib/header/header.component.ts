import {Component, NgModule, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from 'libs/auth/data-access/src/lib/services/auth.service';

@Component({
  selector: 'exe-project-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchTerm: any;

  constructor(private authService: AuthService, private router: Router) {}
  openPopup(): void {}

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
