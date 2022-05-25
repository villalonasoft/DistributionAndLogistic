import { Component, HostListener, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Mode } from 'src/app/models/mode.model';
import { ModeService } from 'src/app/shared/Rest/mode.service';

@Component({
  selector: 'app-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.css']
})
export class ModeComponent implements OnInit {
  form: Mode = new Mode();
  modeService: ModeService;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key == 'Escape') {
      this.resetForm();
    }
    if (event.key == 'F12') {
      return true;
    }
    console.log(event.key);
  }

  constructor(_modeService: ModeService, private _snackBar: MatSnackBar) {
    this.modeService = _modeService;
  }

  ngOnInit(): void {
    this.refreshList();
  }

  populateForm(selectedRecord: Mode) {
    this.form.id = selectedRecord.id;
    this.form.description = selectedRecord.description;
    this.form.abrebiature = selectedRecord.abrebiature;
    this.form.name = selectedRecord.name;
  }

  async createUpdate() {
    this.form.id == 0 ? await this.addUnit(this.form) : await this.updateUnit(this.form);
  }
  resetForm() {
    this.form = new Mode();
  }
  //#region HttpMethod
  async refreshList() {
    await this.modeService.get().then((res) => {
      if (res.error == null) {
        this.modeService.list = res.data;
      }
      else {
        this._snackBar.open(`Codigo:${res.error.error} Mensaje:${res.error.message}`, 'Undo', { horizontalPosition: 'center', verticalPosition: 'bottom', duration: 10000 });
      }
    }).catch((err) => {
      this._snackBar.open(err, 'Undo', { horizontalPosition: 'center', verticalPosition: 'top', duration: 10000 });
    });
  }

  async addUnit(mode: Mode) {
    await this.modeService.post(mode).then((res) => {
      if (res.error == null) {
        this.modeService.list.push({ ...res.data });
        this.form = new Mode();
      }
      else {
        this._snackBar.open(`Codigo:${res.error.error} Mensaje:${res.error.message}`, 'Undo', { horizontalPosition: 'center', verticalPosition: 'bottom', duration: 10000 });
      }
    }).catch((err) => {
      this._snackBar.open(err, 'Undo', { horizontalPosition: 'center', verticalPosition: 'top', duration: 10000 });
    });
  }

  async updateUnit(mode: Mode) {
    await this.modeService.update(mode.id, mode)
      .then((res) => {
        if (res.error == null) {
          this.modeService.list.map(obj => {
            if (obj.id == mode.id) {
              obj.abrebiature = mode.abrebiature;
              obj.name = mode.name;
              obj.description = mode.description;
            }
            return obj;
          });
          this.form = new Mode();
        }
        else {
          this._snackBar.open(`Codigo: ${res.error.error} Mensaje: ${res.error.message}`, '', { horizontalPosition: 'center', verticalPosition: 'bottom', duration: 10000 });
        }
      })
      .catch((err) => {
        this._snackBar.open(err, 'Undo', { horizontalPosition: 'center', verticalPosition: 'top', duration: 10000 });
      });
  }
  //#endregion
}
