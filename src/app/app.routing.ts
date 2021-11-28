import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { ClientComponent } from './layouts/client/client.component';
import { LoginComponent } from './layouts/client/login/login.component';

import { AuthGuardService } from './Services/auth-guard.service';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: '', loadChildren:() => import('./material-component/material.module').then(m => m.MaterialComponentsModule) },
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }
    ]
  },
  { path: 'app', component: ClientComponent,
    children: [
      {path: '', loadChildren:() => import('./external/external.module').then(m => m.ExternalModule),canActivate: [ AuthGuardService ]},
      {path:'login',component:LoginComponent
      // ,
      //   children:[
      //     {
      //       path:'callback'
      //     }
      //   ]
      },
    ],
  }
];
