import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { FullStock } from 'src/app/models/fullStock.model';
import { StockMasive } from 'src/app/models/stockMasive.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  public apiUrl: string = '';
  public collections: string[];
  public list: FullStock[];

  public data: StockMasive[];

  constructor(public http: HttpClient) {
    this.list = new Array();
    this.apiUrl = environment.STOCKAPI;
  }

  public httpOptions = {
    headers: new HttpHeaders(
      { 'Content-Type': 'application/json' }
    )
  }

  async getMasiveStock() {
    this.data = await this.http.get<StockMasive[]>(`${this.apiUrl}/masive`, this.httpOptions).toPromise();
  }

  async getData(): Promise<StockMasive[]> {
    return this.data;
  }

  download(): Observable<Blob> {
    return this.http.get(this.apiUrl + '/export', {
      responseType: 'blob'
    })
  }

  async getList(collectionName: string) {
    this.list = await this.http.get<FullStock[]>(`${this.apiUrl}/${collectionName}`).toPromise();
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //console.log(error);
    return throwError(errorMessage);
  }
}
