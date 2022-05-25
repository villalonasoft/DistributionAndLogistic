import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { merge } from 'rxjs';
import { filter, map, startWith, switchMap } from 'rxjs/operators';
import { StockMasive } from 'src/app/models/stockMasive.model';
import { StockService } from 'src/app/shared/Rest/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['0', 'name', '1', 'max1', '2', 'max2', '3', 'max3', '4', 'max4', '5', 'max5', '6', 'max6', '7', 'max7', '8', 'max8', '9', 'max9', '10', 'max10', '12', 'max12', '13', 'max13', '14', 'max14', '15', 'max15', '16', 'max16',
    '17', 'max17', '18', 'max18', '19', 'max19', '20', 'max20', '21', 'max21', '22', 'max22', '51', 'max51', '57', 'max57', '58', 'max58',]
  data: MatTableDataSource<StockMasive>;

  resultLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public stockService: StockService) { }

  ngOnInit() {
  }

  async ngAfterViewInit() {
    await this.stockService!.getMasiveStock().then(() => {
      merge(this.sort.sortChange, this.paginator.page)
        .pipe(
          startWith({}),
          switchMap(() => {
            this.isLoadingResults = true;
            return this.stockService!.getData();
          }),
          map(data => {
            this.isLoadingResults = false;
            this.isRateLimitReached = data == null;
            if (data === null) {
              return [];
            }
            this.resultLength = data.length;
            return data;
          })
        ).subscribe(data => {
          this.data = new MatTableDataSource(data);
          this.data.paginator = this.paginator;
          this.data.sort = this.sort;
        });
    });
  }

  exportExcel() {
    this.stockService.download().subscribe(blob => {
      const a = document.createElement('a')
      const objectUrl = URL.createObjectURL(blob)
      a.href = objectUrl
      a.download = 'EXPORT';
      a.click();
      URL.revokeObjectURL(objectUrl);
    });
  }
  applyFilter(handle: Event) {
    const filterValue = (handle.target as HTMLInputElement).value;
    this.data.filter = filterValue.trim().toLocaleLowerCase();

    if (this.data.paginator) {
      this.data.paginator.firstPage();
    }
  }

}
