import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserCreate } from 'src/app/models/userCreate.model';
import { AuthService } from 'src/app/shared/Rest/auth.service';
import { UserService } from 'src/app/shared/Rest/user.service';
import { TwoFactorModalComponent } from './two-factor-modal/two-factor-modal.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  hide = true;
  hidechangePassword = true;

  userService: UserService;
  constructor(public dialog: MatDialog, _userService: UserService, private _snackBar: MatSnackBar) {
    this.userService = _userService;
  }

  onSubmit(form: NgForm): void {
    if (this.userService.formData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  async insertRecord(form: NgForm) {
    var result = await this.userService.createUser();
    if (result != null) {
      this.userService.refleshList();
      this._snackBar.open("USUARIO GUARDADO", '', { horizontalPosition: 'center', verticalPosition: 'top', duration: 3000 });
      this.resetForm(form);
    }
    else {
      this._snackBar.open("ERROR", 'err', { horizontalPosition: 'center', verticalPosition: 'top', duration: 3000 });
    }
  }

  async toFactor(userId: number) {
    const dialogRef = this.dialog.open(TwoFactorModalComponent, {
      data: { userId: userId },
      height: '800px',
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog reult: ${result}`);
    });
  }

  async updateRecord(form: NgForm) {
    var result = await this.userService.UpdateUser();
    if (result) {
      this.userService.refleshList();
      this._snackBar.open("USUARIO EDITADO", '', { horizontalPosition: 'center', verticalPosition: 'top', duration: 3000 });
      this.resetForm(form);
    }
    else {
      this._snackBar.open("ERROR", 'err', { horizontalPosition: 'center', verticalPosition: 'top', duration: 3000 });
    }
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.userService.edituser = false;
    this.userService.formData = new UserCreate();
  }
}
