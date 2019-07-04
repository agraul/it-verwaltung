import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddCardComponent } from './add-card/add-card.component';
import { RoomAddComponent } from './room-add/room-add.component';
import { RoomCardComponent } from './room-card/room-card.component';
import { RoomDetailedComponent } from './room-detailed/room-detailed.component';
import { RoomOverviewComponent } from './room-overview/room-overview.component';
import { RoomPipePipe } from './room-pipe.pipe';
import { RoomRoutingModule } from './room-routing.module';

@NgModule({
  declarations: [RoomOverviewComponent, RoomDetailedComponent, RoomCardComponent, AddCardComponent, RoomPipePipe, RoomAddComponent],
  imports: [
    CommonModule,
    RoomRoutingModule,
    FormsModule
  ]
})
export class RoomModule { }
