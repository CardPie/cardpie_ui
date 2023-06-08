import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {
  Accountype,
  BaseReponse,
  LOGIN_RES,
  LOGOUT_RES,
} from '../models/respone.model';
import {injectAPI} from '../APIConfigs/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiDomain = injectAPI();

  LOGIN_URL = `${this.apiDomain}/auth/sign-in`;
  REFRESH_TOKEN_URL = `${this.apiDomain}/auth/refresh-token`;
  LOGOUT_URL = `${this.apiDomain}/auth/sign-out`;
  REGISTER_URL = `${this.apiDomain}/auth/register`;

  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string) {
    return this.httpClient.post<LOGIN_RES>(this.LOGIN_URL, {
      email,
      password,
    });
  }

  register(
    fullname: string,
    accountType: Accountype,
    email: string,
    password: string,
  ) {
    const accountTypeValue = Number(accountType);
    return this.httpClient.post<BaseReponse>(this.REGISTER_URL, {
      fullname,
      account_type: accountTypeValue,
      email,
      password,
    });
  }

  refreshAccessToken(refresh_token: string) {
    return this.httpClient.post<LOGIN_RES>(this.REFRESH_TOKEN_URL, {
      refresh_token: refresh_token,
    });
  }
  isAuthenticated() {
    return !!localStorage.getItem('accessToken');
  }
  logout() {
    // Perform any other necessary logout operations

    return this.httpClient.post<LOGOUT_RES>(this.LOGOUT_URL, {});
  }
}
