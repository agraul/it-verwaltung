import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigOverviewComponent } from './config-overview/config-overview.component';
import { ConfigUserComponent } from './config-user/config-user.component';
import { ConfigSupplierComponent } from './config-supplier/config-supplier.component';
import { ConfigDeviceTypeComponent } from './config-device-type/config-device-type.component';

const routes: Routes = [
  { path: '', component: ConfigOverviewComponent},
  { path: 'user', component: ConfigUserComponent},
  { path: 'supplier', component: ConfigSupplierComponent},
  { path: 'devicetype', component: ConfigDeviceTypeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigRoutingModule { }
