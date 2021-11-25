import { Routes } from '@angular/router';
import { ClientComponent } from './layouts/client/client.component';

import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
  {
    path: 'areaclientes',
    component: ClientComponent,
    children:[
      {
        path:'areaclientes',
        loadChildren:() => import('./client/client.module').then(m=>m.ClientModule)
      }
    ]
  }
];
