import { Injectable } from "@angular/core";
import { Orders } from "../models/orders.model";

@Injectable({
  providedIn:'root'
})
export class OrdersService{

  constructor(){}

  seed:Orders[] = [
    {
      id:2,
      customerId:1,
      customerName:'Cliente 1',
      date:new Date(),
      status: 100,
      progress:0
    },
    {
      id:2,
      customerId:3,
      customerName:'Cliente 3',
      date:new Date(),
      status: 100,
      progress:0
    }
  ];

  inProcesList:Orders[]=[
    {
      id:1,
      customerId:1,
      customerName:'Cliente 1',
      date:new Date(2021,12,9),
      status: 100,
      progress:10
    },
    {
      id:2,
      customerId:2,
      customerName:'Cliente 2',
      date:new Date(2021,12,9),
      status: 100,
      progress:15
    },
    {
      id:1,
      customerId:3,
      customerName:'Cliente 3',
      date:new Date(2021,12,9),
      status: 100,
      progress:25
    }
  ];

  formdata:Orders = new Orders();

  list:Orders[] = new Array();
  list2:Orders[] = new Array();

  refreshList(){
    this.list = this.seed;
  }

  refreshInProcesList(){
    this.list2 = this.inProcesList;
  }

}
