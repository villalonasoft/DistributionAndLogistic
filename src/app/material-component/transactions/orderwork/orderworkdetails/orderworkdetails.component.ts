import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { OrdersService } from 'src/app/Services/orders.service';
import { Orders } from 'src/app/models/orders.model';

@Component({
  selector: 'app-orderworkdetails',
  templateUrl: './orderworkdetails.component.html',
  styleUrls: ['./orderworkdetails.component.css']
})
export class OrderworkdetailsComponent implements OnInit {

  constructor(public service:OrdersService) {
    this.service.refreshInProcesList();
   }

  ELEMENT_DATA:Orders[]=new Array();

  inProcesList:Orders[]=[
    {
      id:1,
      customerId:1,
      customerName:'Cliente 1',
      date:new Date(2021,12,9),
      status: 100,
      progress:0
    },
    {
      id:2,
      customerId:2,
      customerName:'Cliente 2',
      date:new Date(2021,12,9),
      status: 100,
      progress:0
    },
    {
      id:1,
      customerId:3,
      customerName:'Cliente 3',
      date:new Date(2021,12,9),
      status: 100,
      progress:0
    }
  ];

  ngOnInit(): void {
    this.service.refreshList();
    console.log(this.service.list);
    console.log(this.inProcesList);
  }

  dataSource = new MatTableDataSource<Orders>(this.service.list);
  displayedColumns: string[] = ['select', 'customerName', 'id', 'date', 'progress','status'];
  selection = new SelectionModel<Orders>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Orders): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}
