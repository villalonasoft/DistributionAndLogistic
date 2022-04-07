import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Warehouse } from "src/app/models/warehouse.model";
import { RestApiService } from "./rest-api.service";

@Injectable({
  providedIn:'root'
})
export class WarehouseService extends RestApiService{
  readonly baseUrl = '/api/branch'

  getAll():Observable<Warehouse[]>{
    return this.get<Warehouse[]>(this.baseUrl+'/all');
  }
}
