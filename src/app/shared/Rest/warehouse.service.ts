import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Warehouse } from "src/app/models/warehouse.model";
import { BaseService } from "./base.service";

@Injectable({
  providedIn:'root'
})
export class WarehouseService extends BaseService{
  constructor(http:HttpClient){
    super(http);
    this.apiUrl+= 'api/branch/'
  }

  getAll():Observable<Warehouse[]>{
    return this.http.get<Warehouse[]>(this.apiUrl+'all');
  }
}
