import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DeviceOverviewComponent } from './device-overview/device-overview.component';
import { DeviceDetailedComponent } from './device-detailed/device-detailed.component';

@NgModule({
  declarations: [DeviceOverviewComponent, DeviceDetailedComponent],
  imports: [
    CommonModule,
    DeviceRoutingModule
  ]
})
export class DeviceModule { }
