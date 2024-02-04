import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {decryptText, encryptText} from "@app/core/utils/crypto/cypher";

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private helper: any;
  constructor() {
    this.helper = new JwtHelperService();
  }

  public getModules(): any {
    const modules = decryptText(sessionStorage.getItem('Modules') || '')
    return JSON.parse(modules);
  }

  public getRoles(): string[] {
    return this.getTokenData().user.roles;
  }

  public getSessionID(): string {
    return this.getTokenData().user.session_id;
  }

  public getClientID(): number {
    return this.getTokenData().user.client_id;
  }

  public getColors(): any {
    return this.getTokenData().user.colors;
  }

  public getUserId(): string {
    if (this.getTokenData()) {
      return this.getTokenData().user.id;
    }
    return '';
  }

  public getUserName(): string {
    return this.getTokenData().user.name + ' ' + this.getTokenData().user.lastname;
  }

  public getUserEmail(): string {
    if (this.getTokenData()) {
      return this.getTokenData().user.email_notifications;
    }
    return '';
  }

  public getSessionExp(): number {
    if(this.getTokenData()){
      return this.getTokenData().exp;
    }
    return 0;
  }

  public removeSession(): void {
    sessionStorage.clear();
  }

  public getToken(): string {
    return sessionStorage.getItem('access-token') || '';
  }

  private getTokenData(): any {
    const token = sessionStorage.getItem('access-token');
    if (token) {
      return this.helper.decodeToken(token);
    } else {
      return null;
    }
  }

  public getLanguage(): string {
    const lang = decryptText(localStorage.getItem('Language') || '')
    if (lang) {
      const objLanguage = JSON.parse(lang);
      if (this.getUserId() === objLanguage.id) {
        return objLanguage.language;
      }
    }
    return 'es';
  }

  public setLanguage(language: string): void {
    const objLanguage = {
      id: this.getUserId(),
      language: language
    };
    localStorage.setItem('Language', encryptText(JSON.stringify(objLanguage)));
  }

}
