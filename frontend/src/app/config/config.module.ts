import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { ConfigDeviceTypeComponent } from './config-device-type/config-device-type.component';
import { ConfigOverviewComponent } from './config-overview/config-overview.component';
import { ConfigRoutingModule } from './config-routing.module';
import { ConfigSupplierComponent } from './config-supplier/config-supplier.component';
import { ConfigUserComponent } from './config-user/config-user.component';

@NgModule({
  declarations: [ConfigOverviewComponent, ConfigUserComponent, ConfigSupplierComponent, ConfigDeviceTypeComponent],
  imports: [
    CommonModule,
    ConfigRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class ConfigModule { }
