import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { ClientComponent } from './layouts/client/client.component';
import { LoginComponent } from './layouts/client/login/login.component';

import { AuthGuardService } from './Services/auth-guard.service';
import { LockscreenComponent } from './layouts/lockscreen/lockscreen.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', loadChildren:() => import('./material-component/material.module').then(m => m.MaterialComponentsModule) },
    ]
  },
  { path: 'app',
    component: ClientComponent,
    children: [
      {path: '', loadChildren:() => import('./external/external.module').then(m => m.ExternalModule),canActivate: [ AuthGuardService ]},
      {path:'login',component:LoginComponent},
    ],
  },
  {
    path:'login',
    component:LockscreenComponent
  }
];
