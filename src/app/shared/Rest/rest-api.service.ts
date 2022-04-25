import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { observable,Observable,throwError } from "rxjs";
import { catchError,retry } from "rxjs/operators";

@Injectable({
  providedIn:'root'
})
export class RestApiService{
  apiURL = 'https://192.168.10.48:5001';

  constructor(private http:HttpClient){}

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  // HttpClient API get() method => Fetch T list
  get<T>(url:string):Observable<T>{
    return this.http.get<T>(`${this.apiURL}${url}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API get() method => Fetch T
  getById<T>(url:string,id:number):Observable<T>{
    return this.http.get<T>(`${this.apiURL}${url}/${id}`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getByIdDetail<T>(url:string,id:number):Observable<T>{
    return this.http.get<T>(`${this.apiURL}${url}/${id}/details`)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

   // HttpClient API post() method => Create T
  post<T>(url:string,body:T):Observable<any>{
    return this.http.post<any>(`${this.apiURL}${url}`,JSON.stringify(body),this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  postWithOutBody(url:string):Observable<any>{
    return this.http.post<any>(`${this.apiURL}${url}`,null,this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API put() method => Update T
  put<T>(url:string, body:any): Observable<T> {
    return this.http.put<T>(`${this.apiURL}${url}`, JSON.stringify(body), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete employee
  delete(url:string,id:number){
    return this.http.delete(`${this.apiURL}${url}/${id}`, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling
  handleError(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
