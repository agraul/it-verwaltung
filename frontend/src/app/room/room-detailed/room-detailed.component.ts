import { OnInit, Component } from '@angular/core';
import { Room } from 'src/app/fe-entities/room.entity';
import { Card } from 'src/app/fe-entities/card.entity';
import { RoomDetailed } from 'src/app/fe-entities/room-detailed.entity';
import { HComponent } from 'src/app/fe-entities/component.entity';

@Component({
  selector: 'app-room-detailed',
  templateUrl: './room-detailed.component.html',
  styleUrls: ['./room-detailed.component.less']
})
export class RoomDetailedComponent implements OnInit {

  public overViewHComponents: Card[];
  public overViewSComponents: Card[];
  public room: RoomDetailed = {
      id: 1,
      nr: "222",
      bezeichnung: "Computerraum",
      notiz: "Platzhalter fuer Raumnotiz",
      komponenten: [
        {
          id: 5555,
          bezeichnung: "Computer",
          hersteller: "Lenovo",
          seriennummer: "478348384",
          is_software: false
        },
        {
          id: 5556,
          bezeichnung: "Computer",
          hersteller: "hp",
          seriennummer: "478348385",
          is_software: false
        },
        {
          id: 5557,
          bezeichnung: "Computer",
          hersteller: "Apple",
          seriennummer: "478348386",
          is_software: false
        }
      ]
  };

  constructor() { }

  ngOnInit() {
    // this.room = this.getRoom();
    this.overViewHComponents = this.mapHToCards(this.room.komponenten, true);
    this.overViewSComponents = this.mapHToCards(this.room.komponenten, false)
    console.log(this.overViewHComponents);
    
  }

  /**
   * Maps The Components which are Hardware, to Card Array for displaying
   * @param comps 
   */
  mapHToCards(comps: HComponent[], onlyHardware: boolean): Card[] {
    let cards: Card[] = [];
      for(let i=0; i<comps.length; i++){
        //Wenn Hardware
        if(comps[i].is_software !== onlyHardware) {
          let card = new Card(comps[i].bezeichnung, comps[i].hersteller, false, comps[i].seriennummer);
          cards[i] = card;
        } else {
          let card = new Card(comps[i].bezeichnung, comps[i].seriennummer, false);
          cards[i] = card;
        }
    }
    return cards;
  }


  getRoom() {
    //TODO get specific room from db
  }

}
