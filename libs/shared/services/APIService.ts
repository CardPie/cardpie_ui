import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, switchMap} from 'rxjs/operators';
import {AuthService} from '../../auth/data-access/src/lib/services/auth.service';
import {Router} from '@angular/router';
import {injectAPI} from 'libs/auth/data-access/src/lib/APIConfigs/api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = injectAPI();

  private authToken = localStorage.getItem('authToken');

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
  ) {}

  private getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.authService.getAuthToken()}`,
    });

    return headers;
  }

  makeAuthenticatedRequest(url: string) {
    // Check if the user is authenticated
    if (this.authService.isAuthenticated()) {
      // Make the API request with the current access token
      return this.http.get(url).pipe(
        catchError((error: HttpErrorResponse) => {
          // Check if the error indicates an expired access token
          if (
            error.status === 401 &&
            error.error.message === 'access_token_expired'
          ) {
            // Refresh the access token
            return this.authService.refreshAccessToken().pipe(
              switchMap(() => {
                // Retry the API request with the new access token
                return this.http.get(url);
              }),
              catchError((refreshError: HttpErrorResponse) => {
                // Handle refresh token error, e.g., log out the user
                return throwError(refreshError);
              }),
            );
          } else {
            // Handle other API request errors
            return throwError(error);
          }
        }),
      );
    } else {
      // Handle unauthenticated user, e.g., redirect to login page
      this.router.navigate(['/login']);
      return throwError('User is not authenticated');
    }
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    // Handle and customize the error as needed
    console.error('An error occurred:', error);
    return throwError('Something went wrong. Please try again later.');
  }

  public get<T>(path: string): Observable<T> {
    const url = `${this.baseUrl}/${path}`;
    const headers = this.getHeaders();

    return this.http.get<T>(url, {headers}).pipe(catchError(this.handleError));
  }

  public post<T>(path: string, body: any): Observable<T> {
    const url = `${this.baseUrl}/${path}`;
    const headers = this.getHeaders();

    return this.http
      .post<T>(url, body, {headers})
      .pipe(catchError(this.handleError));
  }

  // Add other HTTP methods as needed (e.g., put, delete, etc.)
}
