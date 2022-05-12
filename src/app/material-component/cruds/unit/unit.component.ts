import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Unit } from 'src/app/models/unit.model';
import { UnitService } from 'src/app/shared/Rest/unit.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {
  form:Unit=new Unit();
  unitService:UnitService;
  constructor(_unitService:UnitService,private _snackBar:MatSnackBar) {
    this.unitService=_unitService;
  }

  ngOnInit(): void {
    this.unitService.refreshList();
  }

  async createUpdate(){
    if(this.form.id==0){
      await this.save(this.form.description);
    }
    else{
      await this.update(this.form.id,this.form.description)
    }
    this.form = new Unit();
  }

  populateForm(selectedRecord:Unit){
    this.form.id = selectedRecord.id;
    this.form.description = selectedRecord.description;
  }

  private async save(value:string){
    let newUnit = new Unit();
    newUnit.description = value;
    await this.unitService.addUnit(newUnit);
  }

  private async update(id:number,value:string){
    let newUnit = new Unit();
    newUnit.id = id;
    newUnit.description = value;
    await this.unitService.updateUnit(newUnit);
  }
}
