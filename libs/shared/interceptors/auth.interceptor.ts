import {Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, switchMap} from 'rxjs/operators';
import {AuthService} from 'libs/auth/data-access/src/lib/services/auth.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    // Add access token to the request headers
    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }
    if (request.url.startsWith('https://')) {
      const insecurerequest = request.clone({
        url: request.url.replace('https://', 'http://'),
      });
      return next.handle(insecurerequest);
    }

    return next.handle(request).pipe(
      catchError((error) => {
        if (error.status === 401 && refreshToken) {
          // If the request fails with 401 Unauthorized and we have a refresh token,
          // try refreshing the access token
          return this.authService.refreshAccessToken(refreshToken).pipe(
            switchMap((response) => {
              const newAccessToken = response.data.access_token;
              const refreshToken = response.data.refresh_token;
              // Update the access token in local storage
              localStorage.setItem('accessToken', newAccessToken);
              localStorage.setItem('refreshToken', refreshToken);
              // Clone the original request with the new access token
              request = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${newAccessToken}`,
                },
              });

              // Retry the request with the new access token
              return next.handle(request);
            }),
            catchError(() => {
              // If refreshing the token fails, log the user out
              this.logout();
              return throwError('Token refresh failed');
            }),
          );
        } else {
          // Handle other error cases
          return throwError(error);
        }
      }),
    );
  }

  logout(): void {
    // Clear access and refresh tokens from local storage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    // Redirect the user to the login page
    this.router.navigate(['/login']);
  }
}
