import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { OrderComponent } from "./order/order.component";

import { CreateOrderComponent } from "./create-order/create-order.component";
import { ExternalComponent } from "./external.component";

export const ExternalRoutes:Routes = [
  //{path: 'app',component:ExternalComponent},
  {path:'ordenar',component:CreateOrderComponent},
  {path:'lista-pedidos',component:OrderComponent},
]
