import { Routes } from "@angular/router";
import { OrderComponent } from "./order/order.component";

import { CreateOrderComponent } from "./create-order/create-order.component";
import { ExternalComponent } from "./external.component";
import { HomeComponent } from "./home/home.component";
import { RealtimeComponent } from "./realtime/realtime.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuardService } from './services/auth-guard.service';

export const ExternalRoutes:Routes = [
  {path:'',component:ExternalComponent,canActivate: [ AuthGuardService ]},
  {path:'home',component:HomeComponent,canActivate: [ AuthGuardService ]},
  {path:'ordenar',component:CreateOrderComponent,canActivate: [ AuthGuardService ]},
  {path:'lista-pedidos',component:OrderComponent,canActivate: [ AuthGuardService ]},
  {path:'login',component:LoginComponent,canActivate: [ AuthGuardService ]},
  {path:'realtime',component:RealtimeComponent,canActivate: [ AuthGuardService ]}
]
