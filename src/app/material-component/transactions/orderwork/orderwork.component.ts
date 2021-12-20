import { OrderServices } from 'src/app/shared/Rest/order.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { Orders } from 'src/app/models/orders.model';
import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, SortDirection} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-orderwork',
  templateUrl: './orderwork.component.html',
  styleUrls: ['./orderwork.component.css']
})
export class OrderworkComponent implements AfterViewInit {
  displayedColumns: string[] = ['customer','orderType','initDate','endDate','mount','status','acciones'];
  dataWorking:MatTableDataSource<Orders>;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public service:OrderServices,public dialog:MatDialog) {
    this.dataWorking = new MatTableDataSource();
  }

 ngAfterViewInit(){
  merge(this.sort.sortChange, this.paginator.page)
  .pipe(
    startWith({}),
    switchMap(() => {
      this.isLoadingResults = true;
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
  ).subscribe(data =>{
    this.dataWorking = new MatTableDataSource(data.filter(x=>x.status>100).sort((x,y)=>{
      if(x.status>y.status){
        return 1;
      }
      if(x.status<y.status){
        return -1;
      }
      return 0;
    }));
    this.dataWorking.paginator = this.paginator;
    this.dataWorking.sort = this.sort;
  });
 }

 applyFilter(handle:Event) {
  const filterValue = (handle.target as HTMLInputElement).value;
  this.dataWorking.filter = filterValue.trim().toLowerCase();

  if (this.dataWorking.paginator) {
    this.dataWorking.paginator.firstPage();
  }
}

 openDialog(id:number){
  const dialogRef = this.dialog.open(ModalComponent,{
    data:id,
    height: '400px',
    width: '1200px',
  });

  dialogRef.afterClosed().subscribe(result=>{
    console.log(`Dialog reult: ${result}`);
  });
}
}
