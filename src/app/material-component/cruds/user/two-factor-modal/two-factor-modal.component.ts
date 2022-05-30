import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/Rest/auth.service';

@Component({
  selector: 'app-two-factor-modal',
  templateUrl: './two-factor-modal.component.html',
  styleUrls: ['./two-factor-modal.component.scss']
})
export class TwoFactorModalComponent implements OnInit {
  public myAngularxQrCode: string = '';
  constructor(public _authService: AuthService) { }

  async ngOnInit() {
    const result = await this._authService.getQr();
    this.myAngularxQrCode = `otpauth://totp/SOSOVISH?secret=${result.secretKey}&issuer=Farmaextra`;
  }

}
