import {Component, Inject, OnInit} from '@angular/core';
import { OrderServices } from 'src/app/shared/Rest/order.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrderDetail } from 'src/app/models/orderdetail.model';
import { ModalComponent } from './modal/modal.component';


@Component({
  selector: 'app-orderwork',
  templateUrl: './orderwork.component.html',
  styleUrls: ['./orderwork.component.css']
})
export class OrderworkComponent implements OnInit {

  constructor(public service:OrderServices,public dialog:MatDialog) {
  }

 ngOnInit(): void {
   this.service.refreshList();
 }

 openDialog(id:number){
  this.service.refreshDetail(id).then(res=>{
    if(res == true)
    {
      const dialogRef = this.dialog.open(ModalComponent,{
        data:this.service.detailOrder
      });

      dialogRef.afterClosed().subscribe(result=>{
        console.log(`Dialog reult: ${result}`);
      });
    }
  });
}

 onDeleted(id:number){
   if(confirm("Are you sure to delete this record?"))
   {
     this.service.deletePaymentDetail(id)
       .subscribe(
         res=>{
           this.service.refreshList();
         },
         err=>{console.log(err)}
       );
   }
 }
}
