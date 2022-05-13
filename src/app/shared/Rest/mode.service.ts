import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Mode } from 'src/app/models/mode.model';
import { BaseService } from './base.service';
import { Response } from './Response/response.model';

@Injectable({
  providedIn: 'root'
})
export class ModeService extends BaseService {
  list: Mode[] = new Array();
  form: Mode;

  constructor(http: HttpClient) {
    super(http);
    this.apiUrl += 'api/mode/';
    this.form = new Mode();
  }

  async get(): Promise<Response<Mode[]>> {
    return await this.http.get<Response<Mode[]>>(this.apiUrl)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
      .toPromise()
  }

  async post(mode: Mode): Promise<Response<Mode>> {
    return await this.http.post<Response<Mode>>(this.apiUrl, JSON.stringify(mode), this.httpOptions).toPromise();
  }

  async update(id: number, mode: Mode): Promise<Response<Mode>> {
    return await this.http.put<Response<Mode>>(`${this.apiUrl}${id}`, JSON.stringify(mode), this.httpOptions).toPromise();
  }
}
