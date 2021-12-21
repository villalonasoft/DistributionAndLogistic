import { OrderServices } from 'src/app/shared/Rest/order.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { Orders } from 'src/app/models/orders.model';
import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, SortDirection} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-orderworkdetails',
  templateUrl: './orderworkdetails.component.html',
  styleUrls: ['./orderworkdetails.component.css']
})
export class OrderworkdetailsComponent implements AfterViewInit{
  displayedColumns: string[] = ['customer','orderType','date','priority','mount','reference','acciones'];
  data:MatTableDataSource<Orders>;
  dataWorking:MatTableDataSource<Orders>;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public service:OrderServices, public dialog:MatDialog) {
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
        this.data = new MatTableDataSource(data.filter(x=>x.status==100));
        this.data.paginator = this.paginator;
        this.data.sort = this.sort;
      });

  }

  applyFilter(handle:Event) {
    const filterValue = (handle.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();

    if (this.data.paginator) {
      this.data.paginator.firstPage();
    }
  }

  openDialog(id:number){
    const dialogRef = this.dialog.open(ModalComponent,{
      data:id,
      height: '800px',
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result=>{
      console.log(`Dialog reult: ${result}`);
    });
  }
}