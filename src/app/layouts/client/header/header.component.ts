import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'client-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class ClientHeaderComponent implements OnInit {

  title = 'Tic Tac Toe';
  isAuthenticated: boolean = false;

  constructor() {

  }

  async ngOnInit(): Promise<void> {
    //this.isAuthenticated = await this._auhService.checkAuthenticated();
  }

  async logout(): Promise<void> {
    // todo
    // this.autService.logout('/app/login');
  }
}
