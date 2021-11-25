import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientRoutes } from './client.routing';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ClientRoutes)
  ]
})

export class ClientModule { }
