import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomOverviewComponent } from './room-overview/room-overview.component';
import { RoomDetailedComponent } from './room-detailed/room-detailed.component';

@NgModule({
  declarations: [RoomOverviewComponent, RoomDetailedComponent],
  imports: [
    CommonModule,
    RoomRoutingModule
  ]
})
export class RoomModule { }
