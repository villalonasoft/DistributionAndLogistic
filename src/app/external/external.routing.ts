import { Routes } from "@angular/router";
import { OrderComponent } from "./order/order.component";

import { CreateOrderComponent } from "./create-order/create-order.component";
import { ExternalComponent } from "./external.component";
import { HomeComponent } from "./home/home.component";
import { RealtimeComponent } from "./realtime/realtime.component";

export const ExternalRoutes:Routes = [
  {path:'',component:ExternalComponent},
  {path:'home',component:HomeComponent},
  {path:'ordenar',component:CreateOrderComponent},
  {path:'lista-pedidos',component:OrderComponent},
  {path:'realtime',component:RealtimeComponent}
]
