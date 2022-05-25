import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthResponseDto } from './Response/authResponseDto';
import { Result } from './Response/result';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private authService: AuthService) { }

  saveSession(tokenResponse: AuthResponseDto) {
    window.localStorage.setItem('AT', tokenResponse.token);
    window.localStorage.setItem('ID', tokenResponse.result.id.toString());
    window.localStorage.setItem('NM', tokenResponse.result.name);
    window.localStorage.setItem('TP', tokenResponse.type);
  }

  getSession(): AuthResponseDto | null {
    if (window.localStorage.getItem('AT')) {
      let res: Result = new Result();
      res.id = +(window.localStorage.getItem('ID') || '');
      res.name = window.localStorage.getItem('NM') || '';
      const tokenResponse: AuthResponseDto = {
        token: window.localStorage.getItem('AT') || '',
        result: res,
        type: window.localStorage.getItem('TP') || ''
      };
      return tokenResponse;
    }
    return null;
  }

  isLoggedIn(): boolean {
    let session = this.getSession();
    if (!session) {
      return false;
    }

    // check if token is expired
    const jwtToken = JSON.parse(atob(session.token.split('.')[1]));
    const tokenExpired = Date.now() > (jwtToken.exp * 1000);
    return !tokenExpired;
  }

  logout() {
    window.localStorage.clear();
  }
}
