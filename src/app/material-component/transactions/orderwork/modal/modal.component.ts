import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OrderDetail } from 'src/app/models/orderdetail.model';
import { Orders } from 'src/app/models/orders.model';
import { OrderServices } from 'src/app/shared/Rest/order.service';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  branchId: number;
  orderId: number;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements AfterViewInit {
  displayedColumns: string[] = ['productCode', 'productName', 'unit', 'orderedQuantity', 'location', 'zone'];
  orderDetail: MatTableDataSource<OrderDetail>;
  orderHeader: Orders;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, public service: OrderServices) {
    this.orderDetail = new MatTableDataSource();
    this.orderHeader = new Orders;
  }

  ngAfterViewInit() {
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.service!.getOrderById(this.data.orderId, this.data.branchId)
            .pipe(catchError(() => observableOf(null)));
        }),
        map(data => {
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;
          if (data === null) {
            return [];
          }
          this.resultsLength = data.detail?.length;
          this.orderHeader = data;
          return data.detail;
        })
      ).subscribe(data => {
        this.orderDetail = new MatTableDataSource(data);
        this.orderDetail.paginator = this.paginator;
        this.orderDetail.sort = this.sort;
      });
  }

  applyFilter(handle: Event) {
    const filterValue = (handle.target as HTMLInputElement).value;
    this.orderDetail.filter = filterValue.trim().toLowerCase();

    if (this.orderDetail.paginator) {
      this.orderDetail.paginator.firstPage();
    }
  }

}
