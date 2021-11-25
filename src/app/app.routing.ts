import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { ClientComponent } from './layouts/client/client.component';

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
    path: 'app',
    component: ClientComponent,
    children: [
      {
        path: 'ordenes',
        loadChildren:
          () => import('./external/external.module').then(m => m.ExternalModule)
      },
      {
        path: 'cliente/sss',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];
