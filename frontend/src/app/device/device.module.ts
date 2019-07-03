import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DeviceDetailedComponent } from './device-detailed/device-detailed.component';
import { DeviceOverviewComponent } from './device-overview/device-overview.component';
import { DeviceRoutingModule } from './device-routing.module';
import { MultiInputComponent } from './device-detailed/multi-input/multi-input.component';
import { DeviceCardComponent } from './device-card/device-card.component';
import { AddDeviceCardComponent } from './add-device-card/add-device-card.component';

@NgModule({
  declarations: [DeviceOverviewComponent, DeviceDetailedComponent, MultiInputComponent,  DeviceCardComponent, AddDeviceCardComponent],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DeviceModule { }
