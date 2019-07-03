import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from './log-in/log-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/rooms',
    pathMatch: 'full'
  },
  {
    path: 'rooms',
    loadChildren: './room/room.module#RoomModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'devices',
    loadChildren: './device/device.module#DeviceModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'masterdata',
    loadChildren: './config/config.module#ConfigModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'logIn',
    component: LogInComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
