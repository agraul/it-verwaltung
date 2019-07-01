import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomOverviewComponent } from './room-overview/room-overview.component';
import { RoomDetailedComponent } from './room-detailed/room-detailed.component';

const routes: Routes = [
   { path: '', component:  RoomOverviewComponent},
   { path: 'detailed', component: RoomDetailedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
