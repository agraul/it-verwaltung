import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/fe-entities/card.entity';
import { HComponent } from 'src/app/fe-entities/component.entity';
import { RoomDetailed } from 'src/app/fe-entities/room-detailed.entity';
import { ApiClientService } from 'src/app/core/api-client.service';

@Component({
  selector: 'app-room-detailed',
  templateUrl: './room-detailed.component.html',
  styleUrls: ['./room-detailed.component.less']
})
export class RoomDetailedComponent implements OnInit {

  // For Selecting Devices
  public selectedDevices = new Array();
  public selectModeActive = false;
  public selectButtonValue = 'Auswahl';

  

  public roomComment: string;
  public overViewHComponents: Card[];
  public overViewSComponents: Card[];
  public room: RoomDetailed;

  constructor(private _router: Router, private _route: ActivatedRoute, private api: ApiClientService) { }

  ngOnInit() {
    // TODO !!!!!!
    this.getRoom();
    this.overViewHComponents = this.mapHToCards(this.room.komponenten);
    this.overViewSComponents = this.mapSToCards(this.room.komponenten);



    this.roomComment = this.room.notiz;

  }

  getAllComponents(id: number) {

    this.api.getRoomDetail(id).then(resp => {
      this.room = resp;
    })

  } 

  /**
   * Maps The Components which are Hardware, to Card Array for displaying
   * @param comps
   */
  mapHToCards(comps: HComponent[]): Card[] {
    const cards: Card[] = [];
    let cardCounter = 0;
    for (let i = 0; i < comps.length; i++) {
      // Wenn Hardware
      if (!comps[i].is_software) {
        const card = new Card(comps[i].bezeichnung, comps[i].hersteller, false, comps[i].seriennummer);
        cards[cardCounter++] = card;

      }
    }
    return cards;
  }

  mapSToCards(comps: HComponent[]): Card[] {
    const cards: Card[] = [];
    let cardCounter = 0;
    for (let i = 0; i < comps.length; i++) {
      // Wenn Hardware
      if (comps[i].is_software) {
        const card = new Card(comps[i].bezeichnung, comps[i].seriennummer, false);
        cards[cardCounter++] = card;
      }
    }
    return cards;
  }

  clickCard(id: number) {
    if (!this.selectModeActive) {
      this._router.navigate(['devices/' + id]);
    } else {
      // IF Device is not selected
      if (!this.selectedDevices.find(resp => resp === id)) {
        this.selectedDevices.push(id);
      } else {
        // IF device is already selected
        let index = this.selectedDevices.indexOf(id, 0);
        if (index > -1) {
          this.selectedDevices.splice(index, 1);
        }
      }
    }
    console.log(this.selectedDevices);

  }

  rejectDevices() {
    let devicesToReject = this.selectedDevices;

    //TODO Api call for moving Devices in Ausmusterung
  }

  maintainDevices() {
    let devicesToMaintain = this.selectedDevices;


    //TODO API call for moving Devices in Wartung
  }

  showDetailedHCard(id: number) {
    this._router.navigate(['devices/' + id]);
  }

  getRoom() {
    const roomId = this.getRoomId();
    this.api.getAllRooms().then(resp => {
      for(let i=0; i<resp.length; i++){
        if(resp[i].nr === roomId){
          this.api.getRoomDetail(resp[i].id).then(resp => {
            this.room = resp;
            console.log(resp)
          });
        }
      }
    })
  }

  getRoomId(): string {
    return this._route.snapshot.url[0].path;

  }

  saveComment(id: number) {
    // TODO save the comment to db
  }

  toggleSelectMode() {
    if (this.selectModeActive) {
      this.selectModeActive = false;
      this.selectedDevices = new Array();
      this.selectButtonValue = 'Auswählen';
    } else {
      this.selectModeActive = true;
      this.selectButtonValue = 'Aufheben';
    }

  }
  isCardSelected(id: number): boolean {

    if (this.selectedDevices.find(resp => resp === id)) {
      return true;
    } else {
      return false;
    }
  }

}
