import { OrderDetail } from "./orderdetail.model";

export class Orders{
  branchId:number=0;
  orderId:number=0;
  branchName:string="";
  reference:string="";
  status:string="";
  statusId:number=0;
  warehouse:string="";
  backgroudColor:string="";
  date:Date=new Date();
  canOrder:boolean=false;
  mode:string="";
  detail:OrderDetail[]= new Array()
}
