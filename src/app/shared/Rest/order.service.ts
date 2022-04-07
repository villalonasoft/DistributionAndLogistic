import { Injectable} from "@angular/core";
import { RestApiService } from './rest-api.service';
import { Orders } from "src/app/models/orders.model";
import { Observable } from "rxjs";
import { OrdersHeaders } from "src/app/models/ordersHeaders.model";
import { ChangeCenterDTO } from "src/app/models/changeCenterDTO.model";


@Injectable({
  providedIn: 'root'
})
export class OrderServices extends RestApiService{
  readonly baseUrl = '/api/order';

  getAll():Observable<Orders[]>{
    return this.get<Orders[]>('/api/orders');
  }

  getOrderById(orderId:number,branchId:number):Observable<Orders>{
    return this.get<Orders>(`/api/orders/${orderId}/branch/${branchId}`);
  }

  getAllHeaders():Observable<OrdersHeaders[]>{
    return this.get<OrdersHeaders[]>(`/api/headers`);
  }

  getHeaderById(orderId:number,branchId:number,zoneId:number):Observable<OrdersHeaders>{
    return this.get<OrdersHeaders>(`/api/orders/${orderId}/branch/${branchId}/zone/${zoneId}`);
  }

  addOrder(orderId:number,branchId:number,divider:boolean):Observable<boolean>{
    return this.postWithOutBody(`/api/orders/${orderId}/branch/${branchId}?divider=${divider}`);
  }

  ChangeCenter(updateOrder:ChangeCenterDTO):Observable<boolean>{
    return this.put<boolean>(`/api/orders/changecenter`,updateOrder);
  };
}
