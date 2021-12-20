import { Injectable, OnInit} from "@angular/core";
import { RestApiService } from './rest-api.service';
import { Orders } from "src/app/models/orders.model";
import { OrderDetail } from "src/app/models/orderdetail.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderServices extends RestApiService{
  readonly baseUrl = '/api/order';

  getAll():Observable<Orders[]>{
    return this.get<Orders[]>('/api/order');
  }

  getOrderById(id:number):Observable<Orders>{
    return this.getById<Orders>('/api/order',id);
  }
}
