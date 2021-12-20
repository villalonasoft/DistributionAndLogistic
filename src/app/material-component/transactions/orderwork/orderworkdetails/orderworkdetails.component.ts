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
  displayedColumns: string[] = ['customer','orderType','date','priority','mount','reference'];
  data:MatTableDataSource<Orders>;

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public service:OrderServices, public dialog:MatDialog) {
    this.data = new MatTableDataSource();
  }

  ngAfterViewInit(){
    this.data.paginator = this.paginator;
    this.data.sort = this.sort;

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
      ).subscribe(data => this.data = new MatTableDataSource(data));
  }

  applyFilter(handle:Event) {
    const filterValue = (handle.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLowerCase();

    if (this.data.paginator) {
      this.data.paginator.firstPage();
    }
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
