import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ExternalComponent } from './external.component';
import { OrderComponent } from './order/order.component';
import { Routes,RouterModule } from '@angular/router';
import { ExternalRoutes } from './external.routing';

@NgModule({
  declarations: [
    ExternalComponent,
    OrderComponent,
    CreateOrderComponent
  ],
  imports: [
    RouterModule.forChild(ExternalRoutes),
    CommonModule
  ]
})
export class ExternalModule { }
