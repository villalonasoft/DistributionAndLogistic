import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/Rest/auth.service';
import { TokenService } from 'src/app/shared/Rest/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {

  title = 'Tic Tac Toe';
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService, private tokenService: TokenService) {

  }

  async ngOnInit(): Promise<void> {
    this.isAuthenticated = await this.tokenService.isLoggedIn();
  }

  async logout(): Promise<void> {
    // todo
    this.tokenService.logout();
    window.location.reload();
  }
}
