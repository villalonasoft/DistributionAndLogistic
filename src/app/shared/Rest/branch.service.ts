import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BranchView } from 'src/app/models/branchVIew.model';
import { throwError } from 'rxjs';
import { BaseService } from './base.service';
import { catchError, retry } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class BranchService extends BaseService {
  list: BranchView[] = new Array();
  form: BranchView;

  constructor(http: HttpClient) {
    super(http);
    this.apiUrl += 'api/branch/'
    this.form = new BranchView();
  }

  async get() {
    this.list = await this.http.get<BranchView[]>(this.apiUrl)
      .pipe(
        retry(1),
        catchError(this.handleError))
      .toPromise();
    this.list.sort((x, y) => {
      if (x.id > y.id) return 1;
      if (x.id < y.id) return -1;
      return 0;
    });
  }

  async getById(id: number) {
    try {
      this.form = await this.http.get<BranchView>(this.apiUrl + id.toString()).toPromise();
    } catch (error) {
      console.log(this.handleError);
    }
  }

  async post() {
    return await this.http.post(this.apiUrl, JSON.stringify(this.form), this.httpOptions).toPromise();
  }

  async put() {
    try {
      return await this.http.put(this.apiUrl + this.form.id.toString(), JSON.stringify(this.form), this.httpOptions).toPromise();
    } catch (error) {
      this.handleError(error);
    }
  }
}
