import { OrderServices } from 'src/app/shared/Rest/order.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { Orders } from 'src/app/models/orders.model';
import { Component, ViewChild, AfterViewInit, OnInit, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { ChangeCenterDTO } from 'src/app/models/changeCenterDTO.model';
import { Warehouse } from 'src/app/models/warehouse.model';
import { WarehouseService } from 'src/app/shared/Rest/warehouse.service';
import * as signalR from "@aspnet/signalr";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-orderwork',
  templateUrl: './orderwork.component.html',
  styleUrls: ['./orderwork.component.css']
})
export class OrderworkComponent implements AfterViewInit, OnInit, OnDestroy {

  displayedColumns: string[] = ['branch', 'mode', 'reference', 'warehouse', 'date', 'status', 'acciones'];
  data: MatTableDataSource<Orders>;
  dataWorking: MatTableDataSource<Orders>;
  warehouses: Warehouse[];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private hubConnection: signalR.HubConnection;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(environment.HUB + '/orders')
      .configureLogging(signalR.LogLevel.Information)
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err));
  }

  ngOnDestroy() {
    this.hubConnection.stop().then(() => console.log('Connection stoped'))
      .catch(err => console.log('Error while stoping connection: ' + err));
  }
  public addTransferOrderDataListener = () => {
    this.hubConnection.on('ListOrders', (data) => {
      let result = this.data.data;

      var findS = result.find(element => element.orderId == data.orderId && element.branchId == data.branchId && element.reference == data.reference) ?? null;
      if (findS == null && data.orderId > 0) {
        result.push({ ...data });
        this.wSRefreshData(result);
      }
      else if (data.orderId > 0) {
        result.map(obj => {
          if (obj.orderId == data.orderId && obj.branchId == data.branchId && obj.reference == data.reference) {
            obj.backgroudColor = data.backgroudColor,
              obj.status = data.status,
              obj.statusId = data.statusId,
              obj.warehouse = data.warehouse
          }
          return obj;
        });
        this.wSRefreshData(result);
      }
    });
  }

  wSRefreshData(result: Orders[]) {
    this.data = new MatTableDataSource(result.sort((x, y) => {
      if (Number(x.canOrder) > Number(y.canOrder)) {
        return -1;
      }
      if (Number(x.canOrder) < Number(y.canOrder)) {
        return 1;
      }
      return 0;
    }));
  }

  constructor(
    public service: OrderServices,
    public warehouseServices: WarehouseService, public dialog: MatDialog) {
    this.dataWorking = new MatTableDataSource();
  }

  ngOnInit() {
    this.startConnection();
    this.addTransferOrderDataListener();
  }

  ngAfterViewInit() {
    this.refreshData();
  }

  refreshData() {
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          this.warehouseServices.getAll().then(() => {
            this.warehouses = this.warehouseServices.list;
          });
          return this.service!.getAll()
            .pipe(catchError(() => observableOf(null)));
        }),
        map(data => {
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;
          if (data === null) {
            return [];
          }
          this.resultsLength = data.length;
          return data;
        })
      ).subscribe(data => {
        this.data = new MatTableDataSource(data.sort((x, y) => {
          if (Number(x.canOrder) < Number(y.canOrder)) {
            return 1;
          }
          if (Number(x.canOrder) > Number(y.canOrder)) {
            return -1;
          }
          return 0;
        }));
        this.data.paginator = this.paginator;
        this.data.sort = this.sort;
      });
  }

  publishOrder(orderId: number, branchId: number, divider: boolean) {

    this.service.addOrder(orderId, branchId, divider)
      .subscribe(data => {
        //this.refreshData();
      });
  }

  changeCenter(orderId: number, branchId: number, warehouseId: number) {
    let update = new ChangeCenterDTO();
    update.branchId = branchId;
    update.orderId = orderId;
    update.warehouseId = warehouseId;

    this.service.ChangeCenter(update)
      .subscribe(data => {
        this.refreshData();
      });
  }

  applyFilter(handle: Event) {
    const filterValue = (handle.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();

    if (this.data.paginator) {
      this.data.paginator.firstPage();
    }
  }

  openDialog(orderId: number, branchId: number) {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: { orderId: orderId, branchId: branchId },
      height: '800px',
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog reult: ${result}`);
    });
  }

}
