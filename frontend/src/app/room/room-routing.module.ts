import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomAddComponent } from './room-add/room-add.component';
import { RoomDetailedComponent } from './room-detailed/room-detailed.component';
import { RoomOverviewComponent } from './room-overview/room-overview.component';

const routes: Routes = [
  { path: '', component: RoomOverviewComponent },
  { path: 'add', component: RoomAddComponent },
  { path: ':id', component: RoomDetailedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
