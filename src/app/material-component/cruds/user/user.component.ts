import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserCreate } from 'src/app/models/userCreate.model';
import { AuthService } from 'src/app/shared/Rest/auth.service';
import { UserService } from 'src/app/shared/Rest/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  public myAngularxQrCode: Uint8Array;
  hide = true;
  hidechangePassword = true;

  userService: UserService;
  authService: AuthService;
  constructor(_userService: UserService, _authService: AuthService, private _snackBar: MatSnackBar) {
    this.userService = _userService;
    this.authService = _authService;
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

  async toFactor() {
    const result = await this.authService.getQr();
    this.myAngularxQrCode = result.secret;
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
