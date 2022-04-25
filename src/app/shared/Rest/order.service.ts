import { Injectable} from "@angular/core";
import { RestApiService } from './rest-api.service';
import { Orders } from "src/app/models/orders.model";
import { Observable } from "rxjs";
import { OrdersHeaders } from "src/app/models/ordersHeaders.model";
import { ChangeCenterDTO } from "src/app/models/changeCenterDTO.model";
import { BaseService } from "./base.service";
import { HttpClient } from "@angular/common/http";
import { catchError, retry } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class OrderServices extends BaseService{
  private header:string = "";
  constructor(http:HttpClient){
    super(http);
    this.header = this.apiUrl+'api/headers/';
    this.apiUrl+= 'api/orders/';
  }

  getAll():Observable<Orders[]>{
    return this.http.get<Orders[]>(this.apiUrl);
  }

  getOrderById(orderId:number,branchId:number):Observable<Orders>{
    return this.http.get<Orders>(`${this.apiUrl}${orderId}/branch/${branchId}`);
  }

  getAllHeaders():Observable<OrdersHeaders[]>{
    return this.http.get<OrdersHeaders[]>(`${this.header}`);
  }

  getHeaderById(orderId:number,branchId:number,zoneId:number):Observable<OrdersHeaders>{
    return this.http.get<OrdersHeaders>(`${this.apiUrl}${orderId}/branch/${branchId}/zone/${zoneId}`);
  }

  addOrder(orderId:number,branchId:number,divider:boolean):Observable<boolean>{
    return this.http.post<any>(`${this.apiUrl}${orderId}/branch/${branchId}?divider=${divider}`,null,this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  ChangeCenter(updateOrder:ChangeCenterDTO):Observable<boolean>{
    return this.http.put<boolean>(`${this.apiUrl}changecenter`,updateOrder);
  };
}
