import { Component, OnInit } from '@angular/core';
import { Warehouse } from 'src/app/models/warehouse.model';
import { WarehouseService } from 'src/app/shared/Rest/warehouse.service';

@Component({
  selector: 'app-wharehouse-detail',
  templateUrl: './wharehouse-detail.component.html',
  styleUrls: ['./wharehouse-detail.component.css']
})
export class WharehouseDetailComponent implements OnInit {

  constructor(public warehouseService:WarehouseService) { }

  ngOnInit(): void {
    this.warehouseService.refleshList();
  }

  async populateForm(selectedRecord:Warehouse){
    await this.warehouseService.getById(selectedRecord.id.toString());
  }
}
