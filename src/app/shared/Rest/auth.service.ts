import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Qr } from 'src/app/models/qr.model';
import { BaseService } from './base.service';
import { AuthResponseDto } from './Response/authResponseDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
    this.apiUrl += 'api/auth/';
  }

  async AuthClient(credential: any): Promise<AuthResponseDto> {
    return await this.http.post<AuthResponseDto>(`${this.apiUrl}branch/authenticate`, JSON.stringify(credential), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      ).toPromise();
  }

  async AuthWarehouse(credential: any): Promise<AuthResponseDto> {
    return await this.http.post<AuthResponseDto>(`${this.apiUrl}warehouse/authenticate`, JSON.stringify(credential), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      ).toPromise();
  }

  async AuthUser(credential: any): Promise<AuthResponseDto> {
    return await this.http.post<AuthResponseDto>(`${this.apiUrl}user/authenticate`, JSON.stringify(credential), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      ).toPromise();
  }

  async getQr(): Promise<Qr> {
    return await this.http.get<Qr>(`${this.apiUrl}qr`, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      ).toPromise();
  }
}
