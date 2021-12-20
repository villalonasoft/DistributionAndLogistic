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
  formData:Orders = new Orders();
  listNotWork:Orders[]=new Array();
  listInWork:Orders[]=new Array();
  detailOrder:OrderDetail[]=new Array();

  postPaymentDetail(){
    return this.post<Orders>(this.baseUrl,this.formData);
  }

  putPaymentDetail(){
    return this.put<Orders>(this.baseUrl,this.formData.id,this.formData);
  }

  deletePaymentDetail(id:number){
    return this.delete(this.baseUrl,id);
  }

  getAll():Observable<Orders[]>{
    return this.get<Orders[]>('/api/order');
  }

  refreshDetail(id:number):Promise<boolean>{
    let complete:Promise<boolean> = <Promise<boolean>>this.getByIdDetail<OrderDetail[]>('/api/order',id)
    .toPromise()
    .then((res)=>{
      this.detailOrder = res;
      return res.length>0;
    }).catch((err)=>{console.log(err)});

    return complete;
  }

  refreshList(){
    this.get<Orders[]>('/api/order')
      .toPromise()
      .then(res=>{
        this.listNotWork = res.filter(x=>x.status==100);
        this.listInWork = res.filter(x=>x.status>100).sort((x,y)=>{
          if(x.status>y.status){
            return 1;
          }
          if(x.status<y.status){
            return -1;
          }
          return 0;
        });
      })
  }
}
