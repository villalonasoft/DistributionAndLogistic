import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {merge, Observable, of as observableOf} from 'rxjs';
import { catchError,map, switchMap,startWith } from 'rxjs/operators';
import { OrdersHeaders } from 'src/app/models/ordersHeaders.model';
import { OrderServices } from 'src/app/shared/Rest/order.service';
import { ModalHeaderComponent } from './modal/modal-header.component';
import * as signalR from "@aspnet/signalr";

@Component({
  selector: 'app-order-reception',
  templateUrl: './order-reception.component.html',
  styleUrls: ['./order-reception.component.css']
})
export class OrderReceptionComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['branch','mode','zones','dateinit','dateend','user','status','acciones'];
  data:MatTableDataSource<OrdersHeaders>;
  dataWorking:MatTableDataSource<OrdersHeaders>;

  resultLength = 0;
  isLoadingResults = true;
  isRateLimitReached=false;

  @ViewChild(MatPaginator) paginator:MatPaginator;
  @ViewChild(MatSort) sort:MatSort;

  private hubConnection: signalR.HubConnection;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl('https://localhost:5001/hubs/headers')
                            .configureLogging(signalR.LogLevel.Information)
                            .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }

  public addTransferOrderDataListener = () => {
    this.hubConnection.on('ListHeaders', (data) => {
      this.data = data;
    });
  }

  constructor(public service:OrderServices,public dialog:MatDialog) {
    this.dataWorking = new MatTableDataSource();
  }

  ngOnInit(){
    this.startConnection();
    this.addTransferOrderDataListener();
  }

  ngAfterViewInit(){
    merge(this.sort.sortChange,this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.service!.getAllHeaders().pipe(catchError(()=>observableOf(null)));
        }),
        map(data=>{
          this.isLoadingResults = false;
          this.isRateLimitReached = data ===null;
          if(data ===null){
            return [];
          }
          this.resultLength = data.length;
          return data;
        })
      ).subscribe(data=>{
        this.data = new MatTableDataSource(data.sort((x,y)=>{
          if(x.zoneId>y.zoneId){
            return 1;
          }
          if(x.zoneId<y.zoneId){
            return -1;
          }
          return 0;
        }));
        this.data.paginator = this.paginator;
        this.data.sort = this.sort;
      });
  }

  applyFilter(handle:Event){
    const filterValue = (handle.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLocaleLowerCase();

    if(this.data.paginator){
      this.data.paginator.firstPage();
    }
  }
  openDialog(orderId:number,branchId:number,zoneId:number){
    const dialogRef = this.dialog.open(ModalHeaderComponent,{
      data:{orderId:orderId,branchId:branchId,zoneId:zoneId},
      height: '800px',
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result=>{
      console.log(`Dialog reult: ${result}`);
    });
  }
}
