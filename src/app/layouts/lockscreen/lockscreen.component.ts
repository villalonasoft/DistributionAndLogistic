import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDto } from 'src/app/dto/userDto';
import { WarehouseDto } from 'src/app/dto/warehouseDto';
import { AuthService } from 'src/app/shared/Rest/auth.service';
import { TokenService } from 'src/app/shared/Rest/token.service';

interface Areas {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-lockscreen',
  templateUrl: './lockscreen.component.html',
  styleUrls: ['./lockscreen.component.css']
})
export class LockscreenComponent implements OnInit {
  areas: Areas[] = [
    { value: '/', viewValue: 'Almacen' },
    { value: '/app', viewValue: 'Cliente' },
    { value: '/', viewValue: 'Usuario' },
  ];

  form: FormGroup;

  public loginInvalid = false;
  private formSubmitAttempt = false;
  private returnUrl: string;
  private warehouseCredential: WarehouseDto;
  private UserCredential: UserDto;
  isLoggedIn = false;
  isLoginFailed = false;
  constructor(private fb: FormBuilder,
    private _authService: AuthService,
    private tokenService: TokenService,
    private router: Router) {

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: '',
      area: ['', Validators.required]
    });
  }

  async ngOnInit(): Promise<void> {
    let isLoggedIn = this.tokenService.isLoggedIn();
    console.log(`isLoggedIn: ${isLoggedIn}`);
    if (isLoggedIn) {
      this.isLoggedIn = true;

      this.router.navigate(['']);
    }
  }

  async onSubmit(): Promise<void> {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        let area = this.form.get('area')?.value;
        let url = this.areas.filter(x => x.viewValue == area)
        const username = this.form.get('username')?.value;
        await this.router.navigate([url]);
        if (area == 'Usuario') {
          const password = this.form.get('password')?.value;
          this.UserCredential = new UserDto();
          this.UserCredential.username = username;
          this.UserCredential.password = password;
          console.log(this.UserCredential);
          var result = await this._authService.AuthUser(this.UserCredential);
          this.tokenService.saveSession(result);
          this.isLoggedIn = true;
          this.isLoginFailed = false;
          this.reloadPage();

        } else if (area == 'Almacen') {
          this.warehouseCredential = new WarehouseDto();
          this.warehouseCredential.apiKey = username;
          var result = await this._authService.AuthWarehouse(this.warehouseCredential);
          this.tokenService.saveSession(result);
          this.isLoggedIn = true;
          this.isLoginFailed = false;
          this.reloadPage();
        }
        else {

        }
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }
  reloadPage(): void {
    window.location.reload();
  }
}
