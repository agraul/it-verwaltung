import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomRoutingModule } from './room-routing.module';
import { RoomOverviewComponent } from './room-overview/room-overview.component';
import { RoomDetailedComponent } from './room-detailed/room-detailed.component';
import { RoomCardComponent } from './room-card/room-card.component';
import { AddCardComponent } from './add-card/add-card.component';
import { FormsModule } from '@angular/forms';
import { RoomAddComponent } from './room-add/room-add.component';

@NgModule({
  declarations: [RoomOverviewComponent, RoomDetailedComponent, RoomCardComponent, AddCardComponent, RoomAddComponent],
  imports: [
    CommonModule,
    RoomRoutingModule,
    FormsModule
  ]
})
export class RoomModule { }
