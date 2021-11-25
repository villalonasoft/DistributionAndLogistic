import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { ExternalComponent } from './external/external.component';
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
        path: '',
        redirectTo: 'modulo',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./external/external.module').then(m => m.ExternalModule)
      },
      {
        path: 'modulo',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];
