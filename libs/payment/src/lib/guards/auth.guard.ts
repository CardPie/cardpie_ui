import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from 'libs/auth/data-access/src/lib/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthPayMentGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      // Redirect to login page if not authenticated
      this.router.navigate(['/payment/login']);
      return false;
    }
  }
}
