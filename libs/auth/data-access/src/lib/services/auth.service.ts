import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LOGIN_RES, LOGOUT_RES} from '../models/respone.model';
import {injectAPI} from '../APIConfigs/api';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ApiService} from 'libs/shared/services/APIService';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authToken: string = '';
  private refreshToken: string = '';

  private readonly apiDomain = injectAPI();

  LOGIN_URL = `${this.apiDomain}/auth/sign-in`;
  REFRESH_TOKEN_URL = `${this.apiDomain}/auth/refresh-token`;
  LOGOUT_URL = `${this.apiDomain}/auth/sign-out`;

  constructor(private httpClient: HttpClient) {}

  login(username: string, password: string) {
    return this.httpClient
      .post<LOGIN_RES>(this.LOGIN_URL, {
        username,
        password,
      })
      .pipe(
        tap((response) => {
          this.authToken = response.data.access_token;
          this.refreshToken = response.data.refresh_token;
        }),
      );
  }

  getAuthToken(): string {
    return this.authToken;
  }

  isAuthenticated(): boolean {
    return !!this.authToken;
  }

  refreshAccessToken() {
    return this.httpClient
      .post<LOGIN_RES>(this.REFRESH_TOKEN_URL, {
        refresh_token: this.refreshToken,
      })
      .pipe(
        tap((response) => {
          const newAccessToken = response.data.access_token;
          this.authToken = newAccessToken;
        }),
      );
  }
  logout() {
    this.authToken = '';
    // Perform any other necessary logout operations

    return this.httpClient.post<LOGOUT_RES>(this.LOGOUT_URL, {});
  }
}
