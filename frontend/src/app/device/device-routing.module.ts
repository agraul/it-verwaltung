import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceOverviewComponent } from './device-overview/device-overview.component';
import { DeviceDetailedComponent } from './device-detailed/device-detailed.component';

const routes: Routes = [
  { path: '', component:  DeviceOverviewComponent},
  { path: ':id', component: DeviceDetailedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceRoutingModule { }
