import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/fe-entities/card.entity';
import { Room } from 'src/app/fe-entities/room.entity';

@Component({
  selector: 'app-room-overview',
  templateUrl: './room-overview.component.html',
  styleUrls: ['./room-overview.component.less']
})
export class RoomOverviewComponent implements OnInit {

  public rooms: Room[];
  public overViewRooms: Card[];
  public searchText = '';


  constructor(private router: Router) { }

  ngOnInit() {
    this.rooms = this.getRooms();
    this.overViewRooms = this.mapRoomsToCard(this.rooms);

  }

  private getRooms(): Room[] {
    // TODO add api call for db entries
    return [
      {
        id: 1,
        nr: '222',
        bezeichnung: 'Computerraum',
        hat_notiz: true,
        komponenten_arten: null
      },
      {
        id: 2,
        nr: '222',
        bezeichnung: 'Computerraum',
        hat_notiz: false,
        komponenten_arten: null
      }
      , {
        id: 3,
        nr: '222',
        bezeichnung: 'Computerraum',
        hat_notiz: true,
        komponenten_arten: null
      }
    ];
  }
  /**
   *  Maps the room-array to card-array, for overview cards
   * @param rooms
   */
  private mapRoomsToCard(rooms: Room[]): Card[] {
    const cards: Card[] = [];
    for (let i = 0; i < rooms.length; i++) {
      const card = new Card(rooms[i].nr, rooms[i].bezeichnung, rooms[i].hat_notiz);
      cards[i] = card;
    }
    return cards;
  }
  /**
   *  navigates to detailed view
   * @param id
   */
  private showDetailedCard(id: number) {
    this.router.navigate(['rooms/' + id]);
  }

  showAddRoom() {
    this.router.navigate(['rooms/add']);
  }

}
