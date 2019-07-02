import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DeviceDetailedComponent } from './device-detailed/device-detailed.component';
import { DeviceOverviewComponent } from './device-overview/device-overview.component';
import { DeviceRoutingModule } from './device-routing.module';

@NgModule({
  declarations: [DeviceOverviewComponent, DeviceDetailedComponent],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DeviceModule { }
