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
  form: Unit = new Unit();
  unitService: UnitService;

  constructor(_unitService: UnitService, private _snackBar: MatSnackBar) {
    this.unitService = _unitService;
  }

  ngOnInit(): void {
    this.refreshList();
  }

  populateForm(selectedRecord: Unit) {
    this.form.id = selectedRecord.id;
    this.form.description = selectedRecord.description;
  }

  async createUpdate() {
    this.form.id == 0 ? await this.addUnit(this.form) : await this.updateUnit(this.form);
  }

  //#region  HttpMethod
  async refreshList() {
    await this.unitService.get().then((res) => {
      if (res.error == null) {
        this.unitService.list = res.data;
      }
      else {
        this._snackBar.open(`Codigo:${res.error.error} Mensaje:${res.error.message}`, 'Undo', { horizontalPosition: 'center', verticalPosition: 'bottom', duration: 10000 });
      }
    }).catch((err) => {
      this._snackBar.open(err, 'Undo', { horizontalPosition: 'center', verticalPosition: 'top', duration: 10000 });
    });
  }

  async addUnit(unit: Unit) {
    await this.unitService.post(unit).then((res) => {
      if (res.error == null) {
        this.unitService.list.push({ ...res.data });
        this.form = new Unit();
      }
      else {
        this._snackBar.open(`Codigo:${res.error.error} Mensaje:${res.error.message}`, 'Undo', { horizontalPosition: 'center', verticalPosition: 'bottom', duration: 10000 });
      }
    }).catch((err) => {
      this._snackBar.open(err, 'Undo', { horizontalPosition: 'center', verticalPosition: 'top', duration: 10000 });
    });
  }

  async updateUnit(unit: Unit) {
    await this.unitService.update(unit.id, unit)
      .then((res) => {
        if (res.error == null) {
          this.unitService.list.map(obj => {
            if (obj.id == unit.id) {
              obj.description = unit.description;
            }
            return obj;
          });
          this.form = new Unit();
        }
        else {
          this._snackBar.open(`Codigo:${res.error.error} Mensaje:${res.error.message}`, 'Undo', { horizontalPosition: 'center', verticalPosition: 'bottom', duration: 10000 });
        }
      })
      .catch((err) => {
        this._snackBar.open(err, 'Undo', { horizontalPosition: 'center', verticalPosition: 'top', duration: 10000 });
      });
  }
  //#endregion
}
