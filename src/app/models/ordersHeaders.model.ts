import { OrderHeaderDetail } from "./orderHeadersDetail.model";

export class OrdersHeaders{
  branchId:number=0;
  orderId:number=0;
  zoneId:number=0;
  branchName:string="";
  backgroudColor:string="";
  dateInit:Date=new Date();
  dateEnd:Date=new Date();
  user: string="";
  status:string="";
  zones:string="";
  mode:string="";
  details:OrderHeaderDetail[]= new Array()
}
