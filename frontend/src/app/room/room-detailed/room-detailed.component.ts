import { OnInit, Component } from '@angular/core';
import { Room } from 'src/app/fe-entities/room.entity';
import { Card } from 'src/app/fe-entities/card.entity';
import { RoomDetailed } from 'src/app/fe-entities/room-detailed.entity';
import { HComponent } from 'src/app/fe-entities/component.entity';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-detailed',
  templateUrl: './room-detailed.component.html',
  styleUrls: ['./room-detailed.component.less']
})
export class RoomDetailedComponent implements OnInit {

  public roomComment: string;
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
        },
        {
          id: 5557,
          bezeichnung: "Powerpoint",
          hersteller: "Microsoft",
          seriennummer: "4543-4343-65-665",
          is_software: true
        },{
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
        },
        {
          id: 5557,
          bezeichnung: "Powerpoint",
          hersteller: "Microsoft",
          seriennummer: "4543-4343-65-665",
          is_software: true
        },{
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
        },
        {
          id: 5557,
          bezeichnung: "Powerpoint",
          hersteller: "Microsoft",
          seriennummer: "4543-4343-65-665",
          is_software: true
        },
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
        },
        {
          id: 5557,
          bezeichnung: "Powerpoint",
          hersteller: "Microsoft",
          seriennummer: "4543-4343-65-665",
          is_software: true
        }
      ]
  };

  constructor(private _router: Router, private _route:ActivatedRoute) { }

  ngOnInit() {
    this.getRoom();
    this.overViewHComponents = this.mapHToCards(this.room.komponenten);
    this.overViewSComponents = this.mapSToCards(this.room.komponenten);

    
    
    this.roomComment = this.room.notiz;
        
  }

  /**
   * Maps The Components which are Hardware, to Card Array for displaying
   * @param comps 
   */
  mapHToCards(comps: HComponent[]): Card[] {
    let cards: Card[] = [];
    let cardCounter = 0;
      for(let i=0; i<comps.length; i++){
        //Wenn Hardware
        if(!comps[i].is_software) {
          let card = new Card(comps[i].bezeichnung, comps[i].hersteller, false, comps[i].seriennummer);
          cards[cardCounter++] = card;
          
        }
    }
    return cards;
  }

  mapSToCards(comps: HComponent[]): Card[] {
    let cards: Card[] = [];
    let cardCounter = 0;
      for(let i=0; i<comps.length; i++){
        //Wenn Hardware
        if(comps[i].is_software) {
          let card = new Card(comps[i].bezeichnung, comps[i].seriennummer, false);
          cards[cardCounter++] = card;
          console.log(i);
          console.log(comps[i].is_software);
          
          
        }
    }
    return cards;
  }

  showDetailedHCard(id: number) {
    this._router.navigate(['devices/'+id])
  }

  getRoom() {
    let roomId = this.getRoomId();
    //TODO get specific room from db
    return;
  }

  getRoomId():string {
    return this._route.snapshot.url[0].path;
    
  }

  saveComment(id: number) {
    // TODO save the comment to db
  }

}
