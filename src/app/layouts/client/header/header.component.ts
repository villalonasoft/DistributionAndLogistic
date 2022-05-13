import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'client-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class ClientHeaderComponent implements OnInit {

  title = 'Tic Tac Toe';
  isAuthenticated: boolean = false;
  _auhService: AuthService;

  constructor(private autService: AuthService) {
    this._auhService = autService;
  }

  async ngOnInit(): Promise<void> {
    //this.isAuthenticated = await this._auhService.checkAuthenticated();
  }

  async logout(): Promise<void> {
    // todo
    // this.autService.logout('/app/login');
  }
}
