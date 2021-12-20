import { OrderDetail } from "./orderdetail.model";

export class Orders{
  id:number=0;
  customer:string="";
  OrderType:string="";
  date:string="";
  initDate:Date=new Date();
  endDate:Date=new Date();
  priority:number=0;
  mount:number=0;
  reference:string="";
  status:number=0;
  OrderDetails:OrderDetail[]= new Array()
}
