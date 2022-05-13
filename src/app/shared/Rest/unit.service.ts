import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Unit } from 'src/app/models/unit.model';
import { BaseService } from './base.service';
import { Response } from './Response/response.model';

@Injectable({
  providedIn: 'root'
})
export class UnitService extends BaseService {
  list: Unit[] = new Array();

  constructor(http: HttpClient) {
    super(http);
    this.apiUrl += 'api/unit/';
  }

  async get(): Promise<Response<Unit[]>> {
    return await this.http.get<Response<Unit[]>>(this.apiUrl)
      .pipe(
        retry(1),
        catchError(this.handleError))
      .toPromise();
  }

  async post(unit: Unit): Promise<Response<Unit>> {
    return await this.http.post<Response<Unit>>(this.apiUrl, JSON.stringify(unit), this.httpOptions).toPromise();
  }

  async update(id: number, unit: Unit): Promise<Response<Unit>> {
    return await this.http.put<Response<Unit>>(`${this.apiUrl}${id}`, JSON.stringify(unit), this.httpOptions).toPromise();
  }
}
