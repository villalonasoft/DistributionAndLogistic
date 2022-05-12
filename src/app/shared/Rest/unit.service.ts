import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Unit } from 'src/app/models/unit.model';
import { BaseService } from './base.service';
import { Response } from './Response/response.model';

@Injectable({
  providedIn: 'root'
})
export class UnitService extends BaseService{
  list:Unit[] = new Array();
  form:Unit;

  constructor(http:HttpClient) {
    super(http);
    this.apiUrl += 'api/unit/';
    this.form = new Unit();
  }

  async refreshList(){
    let result = await this.get();
    if(result.error==null){
      this.list = result.data;
    }
  }

  async addUnit(unit:Unit){
    let result = await this.post(unit);
    if(result.error==null){
      this.list.push({...result.data});
    }
  }

  async updateUnit(unit:Unit){
    let result = await this.update(unit.id,unit);
    if(result.error==null){
      this.list.map(obj=>{
        if(obj.id == unit.id){
          obj.description = unit.description;
        }
        return obj;
      });
    }
  }

  private async get():Promise<Response<Unit[]>>{
    return await this.http.get<Response<Unit[]>>(this.apiUrl)
      .pipe(
        retry(1),
        catchError(this.handleError))
      .toPromise();
  }

  private async post(unit:Unit):Promise<Response<Unit>>{
    return await this.http.post<Response<Unit>>(this.apiUrl,JSON.stringify(unit),this.httpOptions).toPromise();
  }
  private async update(id:number,unit:Unit):Promise<Response<Unit>>{
    return  await this.http.put<Response<Unit>>(`${this.apiUrl}${id}`,JSON.stringify(unit),this.httpOptions).toPromise();
  }
}
