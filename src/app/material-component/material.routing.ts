import { Routes } from '@angular/router';
import { OrderworkComponent } from './transactions/orderwork/orderwork.component';
import { OrderReceptionComponent } from './transactions/order-reception/order-reception.component';
import { DashboarComponent } from './dashboar/dashboar.component';

export const MaterialRoutes: Routes = [
  {
    path:'',
    component:DashboarComponent
  },
  {
    path:'gestion',
    component:OrderworkComponent
  },
  {
    path: 'orders',
    component: OrderReceptionComponent
  },
];
