import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Warehouse } from 'src/app/models/warehouse.model';
import { WarehouseZone } from 'src/app/models/warehouseZone.model';
import { WarehouseService } from 'src/app/shared/Rest/warehouse.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {

  warehouseService:WarehouseService;
  constructor(_warehouseService:WarehouseService, private _snackBar:MatSnackBar) {
    this.warehouseService = _warehouseService;
  }

  ngOnInit(): void {

  }

  onSubmit(form:NgForm):void{
    if(this.warehouseService.form.id==0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  async insertRecord(form:NgForm){
    await this.warehouseService.create().then((res)=>{
      this.warehouseService.refleshList();
      this._snackBar.open("USUARIO GUARDADO",'',{horizontalPosition:'center',verticalPosition:'top',duration:3000});
      this.resetForm(form);
    }).catch((err)=>{
      this._snackBar.open(err,'err',{horizontalPosition:'center',verticalPosition:'top',duration:3000});
    });
  }
  async updateRecord(form:NgForm){
    await this.warehouseService.update().then(()=>{
      this.warehouseService.refleshList();
      this._snackBar.open("USUARIO EDITADO",'',{horizontalPosition:'center',verticalPosition:'top',duration:3000});
      this.resetForm(form);
      this.resetForm2(form)
    }).catch((err)=>{
      console.log(err);
      this._snackBar.open(err.message,'',{horizontalPosition:'center',verticalPosition:'top',duration:3000});
    });
  }

  addLocation(form:NgForm){
    this.warehouseService.addLocation();
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.warehouseService.form = new Warehouse();
  }

  resetForm2(form:NgForm){
    this.warehouseService.form2 = new WarehouseZone();
  }

  populateForm2(pd:WarehouseZone){
    this.warehouseService.form2 = pd;
  }
}
