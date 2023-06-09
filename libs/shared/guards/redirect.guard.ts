import {Injectable} from '@angular/core';
import {CanLoad, Route, Router} from '@angular/router';
import {AuthService} from '../../auth/data-access/src/lib/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RedirectGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(route: Route): boolean {
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl('/home');
      return false;
    } else {
      return true;
    }
  }
}
