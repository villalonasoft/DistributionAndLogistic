import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { merge,of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { OrderHeaderDetail } from 'src/app/models/orderHeadersDetail.model';
import { OrdersHeaders } from 'src/app/models/ordersHeaders.model';
import { OrderServices } from 'src/app/shared/Rest/order.service';

export interface DialogData{
  branchId:number;
  orderId:number;
  zoneId:number
}

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.css']
})
export class ModalHeaderComponent implements AfterViewInit{
  displayedColumns: string[] = ['completeCode','productName','units','quantityAvailable','countedQuantity','location','zone','status'];
  orderDetail:MatTableDataSource<OrderHeaderDetail>;
  orderHeader:OrdersHeaders;

  resultLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  constructor(@Inject(MAT_DIALOG_DATA)public data:DialogData,public service:OrderServices) {
    this.orderDetail = new MatTableDataSource();
    this.orderHeader = new OrdersHeaders();
   }

  ngAfterViewInit(){
    merge(this.sort.sortChange,this.paginator.page)
    .pipe(
      startWith({}),
      switchMap(()=>{
        this.isLoadingResults = true;
        return this.service!.getHeaderById(this.data.orderId,this.data.branchId,this.data.zoneId)
          .pipe(catchError(()=> observableOf(null)));
      }),
      map(data=>{
        this.isLoadingResults = false;
        this.isRateLimitReached = data === null;
        if(data === null){
          return [];
        }
        this.resultLength = data.details?.length;
        this.orderHeader = data;
        return data.details;
      })
    ).subscribe(data=>{
      this.orderDetail = new MatTableDataSource(data);
      this.orderDetail.paginator = this.paginator;
      this.orderDetail.sort = this.sort;
    })
  }

  applyFilter(handle:Event) {
    const filterValue = (handle.target as HTMLInputElement).value;
    this.orderDetail.filter = filterValue.trim().toLowerCase();

    if (this.orderDetail.paginator) {
      this.orderDetail.paginator.firstPage();
    }
  }

}
