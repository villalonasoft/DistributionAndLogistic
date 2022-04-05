import { OrderDetail } from "./orderdetail.model";

export class Orders{
  branchId:number=0;
  orderId:number=0;
  branchName:string="";
  reference:string="";
  status:string="";
  statusId:number=0;
  backgroudColor:string="";
  date:Date=new Date();
  mode:string="";
  detail:OrderDetail[]= new Array()
}
