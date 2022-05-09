import { Routes } from '@angular/router';
import { OrderworkComponent } from './transactions/orderwork/orderwork.component';
import { OrderReceptionComponent } from './transactions/order-reception/order-reception.component';
import { DashboarComponent } from './dashboar/dashboar.component';
import { UserComponent } from './cruds/user/user.component';
import { CustomersComponent } from './cruds/customers/customers.component';
import { WarehouseComponent } from './cruds/warehouse/warehouse.component';

export const MaterialRoutes: Routes = [
  {
    path:'',
    component:DashboarComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'customer',
    component:CustomersComponent
  },
  {
    path:'gestion',
    component:OrderworkComponent
  },
  {
    path: 'orders',
    component: OrderReceptionComponent
  },
  {
    path:'warehouse',
    component:WarehouseComponent
  }
];
