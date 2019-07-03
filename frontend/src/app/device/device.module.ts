import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DeviceOverviewComponent } from './device-overview/device-overview.component';
import { DeviceDetailedComponent } from './device-detailed/device-detailed.component';
import { DeviceCardComponent } from './device-card/device-card.component';
import { FormsModule } from '@angular/forms';
import { AddDeviceCardComponent } from './add-device-card/add-device-card.component';

@NgModule({
  declarations: [DeviceOverviewComponent, DeviceDetailedComponent, DeviceCardComponent, AddDeviceCardComponent],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    FormsModule
  ]
})
export class DeviceModule { }
