import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { ClientComponent } from './layouts/client/client.component';
import { LoginComponent } from './layouts/client/login/login.component';

import { LockscreenComponent } from './layouts/lockscreen/lockscreen.component';
import { AuthGuard } from './shared/helpers/auth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', loadChildren: () => import('./material-component/material.module').then(m => m.MaterialComponentsModule) },
    ]
  },
  {
    path: 'app',
    component: ClientComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', loadChildren: () => import('./external/external.module').then(m => m.ExternalModule) },
      { path: 'login', component: LoginComponent },
    ],
  },
  {
    path: 'login',
    component: LockscreenComponent
  }
];
