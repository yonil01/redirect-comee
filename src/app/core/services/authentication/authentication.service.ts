import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { EnvService } from '@app/core/services/env/env.service';
import { EnvServiceProvider } from '@app/core/services/env/env.service.provider';
import { LocalStorageService } from '@app/core/services/local-storage/local-storage.service';
import { AppState } from '@app/core/store/app.reducers';
import { Store } from '@ngrx/store';
import { controlTimeout } from '@app/core/store/actions/token.action';
import {Response, User} from '@app/core/models';
import { encryptText } from '@app/core/utils/crypto/cypher';
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class AuthenticationService {
  constructor(
    private _httpClient: HttpClient,
    private env: EnvService,
    private localStorageService: LocalStorageService,
    private store: Store<AppState>
  ) {}

  public login(value: any): Observable<Response>{
    const url = EnvServiceProvider.useFactory().REST_API + '/api/v4/auth';
    const data = {
      id: encryptText(value.id),
      password: encryptText(value.password),
      client_id: 9925,
      host_name: 'hostname',
    };

    return this._httpClient.post<Response>(url, data).pipe(map((res) => res));
  }

  public createUser(user: User) {
    const password = encryptText(user.password || '');
    const passwordConfirm = encryptText(user.password_confirm || '');
    const newUser = {
      password,
      email_notifications: user.email_notifications,
      identification_number: user.identification_number,
      identification_type: user.identification_type,
      last_name: user.last_name,
      name: user.name,
      password_confirm: passwordConfirm,
      username: user.username,
    };
    const url = EnvServiceProvider.useFactory().REST_API + '/api/v1/user/register';
    return this._httpClient.post(url, newUser).pipe(map((res) => res));
  }

  public validateUserName(username: string) {
    let url = EnvServiceProvider.useFactory().REST_API + '/api/v1/user/user-exist';
    url = url + '?' + 'user=' + username;
    return this._httpClient.get(url).pipe(map((res) => res));
  }

  public validateEmail(email: string): Observable<Response> {
    let url = EnvServiceProvider.useFactory().REST_API + '/api/v1/user/email-exist';
    url = url + '?' + 'email=' + email;
    return this._httpClient.get<Response>(url).pipe(map((res) => res));
  }

  public validateUserEmail(useremail: string) {
    let url = EnvServiceProvider.useFactory().REST_API + '/api/v1/user/email-exist';
    url = url + '?' + 'email-exist=' + useremail;
    return this._httpClient.get(url).pipe(map((res) => res));
  }

  public validateUserPassword(password: any) {
    password.password = encryptText(password.password);
    const url = EnvServiceProvider.useFactory().REST_API + '/api/v1/auth/password-policy';
    return this._httpClient.post(url, password).pipe(map((res) => res));
  }

  public forgotPassword(forgotPassword: any) {
    const url =  EnvServiceProvider.useFactory().REST_API + '/api/v1/auth/forgot-password';
    return this._httpClient.post(url, forgotPassword).pipe(map((res) => res));
  }

  public changePassword(passwords: any) {
    const url =  EnvServiceProvider.useFactory().REST_API + '/api/v1/auth/change-password';
    return this._httpClient.post(url, passwords).pipe(map((res) => res));
  }

  public autoLogin(id: any, password: any) {
    const url = EnvServiceProvider.useFactory().GRAPHQL_API + '/api/v3/auth';
    const data = {
      id: id,
      password: password,
      client_id: 9925,
      host_name: 'hostname',
    };

    return this._httpClient.post(url, data).pipe(map((res) => res));
  }

  public setTokenSessionStorage(token: any): void {
    const {access_token, refresh_token} = token;
    sessionStorage.setItem('access-token', access_token);
    sessionStorage.setItem('refresh-token', refresh_token);
    const timeout = this.localStorageService.getSessionExp();
    this.store.dispatch(controlTimeout({timeout: timeout}));
  }

  public getTokenSessionStorage(param: string = ''): string {
    if (sessionStorage.getItem('access-token')) {
      const tokenEncryp = sessionStorage.getItem('access-token');
      const token = JSON.parse(tokenEncryp || '');
      if (param === '') {
        return token;
      }
    }
    return '';
  }

  public isLogged(): boolean {
    return !!sessionStorage.getItem('access-token');
  }
}
