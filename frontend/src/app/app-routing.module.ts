import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [

  { path: '',
    redirectTo: '/rooms',
    pathMatch: 'full'
  },
  {
    path: 'rooms',
    loadChildren : () => import('./room/room.module').then(m => m.RoomModule), 
  },
  {
    path: 'devices',
    loadChildren : () => import('./device/device.module').then(m => m.DeviceModule), 
  },
  {
    path: 'configs',
    loadChildren : () => import('./config/config.module').then(m => m.ConfigModule), 
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
