import { Component } from '@angular/core';

@Component({
  selector: 'client-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class ClientHeaderComponent {

  title = 'Tic Tac Toe';
  isAuthenticated = false;

  async logout(): Promise<void> {
    // todo
  }
}
