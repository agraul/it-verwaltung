import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/fe-entities/device.entity';
import { Router } from '@angular/router';
import { Card } from 'src/app/fe-entities/card.entity';

@Component({
  selector: 'app-device-overview',
  templateUrl: './device-overview.component.html',
  styleUrls: ['./device-overview.component.less']
})
export class DeviceOverviewComponent implements OnInit {
  public devices: Device[];
  public deviceCards: Card[];
  public deviceAttributes;
  public SearchText = '';

  constructor(private _router: Router) {}

  ngOnInit() {
    this.devices = this.getDevices();
    this.deviceAttributes = this.getDeviceAttributes();
    this.deviceCards = this.mapToDCards(this.devices);
  }

  getDevices(): Device[] {
    return [
      {
        id: 11,
        bezeichnung: 'Computer',
        raumId: 222,
        lieferantId: 48768,
        einkaufsdatum: '2019-07-13',
        geweahrleistungsdauer: 12,
        notiz: 'Ein komischer Rechner',
        hersteller: 'Apple',
        belegId: 1234,
        komponentenArtId: 1,
        komponentenAttribute: [
          { id: 2, value: '4GB RAM' },
          { id: 1, value: '293474-34764' },
          { id: 3, value: 'GTX 2070' }
        ]
      },
      {
        id: 11,
        bezeichnung: 'Computer',
        raumId: 222,
        lieferantId: 48768,
        einkaufsdatum: '2019-07-13',
        geweahrleistungsdauer: 12,
        notiz: 'Ein komischer Rechner',
        hersteller: 'Apple',
        belegId: 1234,
        komponentenArtId: 1,
        komponentenAttribute: [
          { id: 2, value: '4GB RAM' },
          { id: 1, value: '293474-34764' },
          { id: 3, value: 'GTX 2070' }
        ]
      },
      {
        id: 12,
        bezeichnung: 'Computer',
        raumId: 222,
        lieferantId: 48768,
        einkaufsdatum: '2019-07-13',
        geweahrleistungsdauer: 12,
        notiz: 'Ein komischer Rechner',
        hersteller: 'Apple',
        belegId: 1234,
        komponentenArtId: 1,
        komponentenAttribute: [
          { id: 2, value: '4GB RAM' },
          { id: 1, value: '293474-34764' },
          { id: 3, value: 'GTX 2070' }
        ]
      },
      {
        id: 13,
        bezeichnung: 'Computer',
        raumId: 222,
        lieferantId: 48768,
        einkaufsdatum: '2019-07-13',
        geweahrleistungsdauer: 12,
        notiz: 'Ein komischer Rechner',
        hersteller: 'Apple',
        belegId: 1234,
        komponentenArtId: 1,
        komponentenAttribute: [
          { id: 2, value: '4GB RAM' },
          { id: 1, value: '293474-34764' },
          { id: 3, value: 'GTX 2070' }
        ]
      },
      {
        id: 11,
        bezeichnung: 'Computer',
        raumId: 222,
        lieferantId: 48768,
        einkaufsdatum: '2019-07-13',
        geweahrleistungsdauer: 12,
        notiz: 'Ein komischer Rechner',
        hersteller: 'Apple',
        belegId: 1234,
        komponentenArtId: 1,
        komponentenAttribute: [
          { id: 2, value: '4GB RAM' },
          { id: 1, value: '293474-34764' },
          { id: 3, value: 'GTX 2070' }
        ]
      },
      {
        id: 11,
        bezeichnung: 'Computer',
        raumId: 222,
        lieferantId: 48768,
        einkaufsdatum: '2019-07-13',
        geweahrleistungsdauer: 12,
        notiz: 'Ein komischer Rechner',
        hersteller: 'Apple',
        belegId: 1234,
        komponentenArtId: 1,
        komponentenAttribute: [
          { id: 2, value: '4GB RAM' },
          { id: 1, value: '293474-34764' },
          { id: 3, value: 'GTX 2070' }
        ]
      },
      {
        id: 11,
        bezeichnung: 'Computer',
        raumId: 222,
        lieferantId: 48768,
        einkaufsdatum: '2019-07-13',
        geweahrleistungsdauer: 12,
        notiz: 'Ein komischer Rechner',
        hersteller: 'Apple',
        belegId: 1234,
        komponentenArtId: 1,
        komponentenAttribute: [
          { id: 2, value: '4GB RAM' },
          { id: 1, value: '293474-34764' },
          { id: 3, value: 'GTX 2070' }
        ]
      },
      {
        id: 11,
        bezeichnung: 'Computer',
        raumId: 222,
        lieferantId: 48768,
        einkaufsdatum: '2019-07-13',
        geweahrleistungsdauer: 12,
        notiz: 'Ein komischer Rechner',
        hersteller: 'Apple',
        belegId: 1234,
        komponentenArtId: 1,
        komponentenAttribute: [
          { id: 2, value: '4GB RAM' },
          { id: 1, value: '293474-34764' },
          { id: 3, value: 'GTX 2070' }
        ]
      },
      {
        id: 11,
        bezeichnung: 'Computer',
        raumId: 222,
        lieferantId: 48768,
        einkaufsdatum: '2019-07-13',
        geweahrleistungsdauer: 12,
        notiz: 'Ein komischer Rechner',
        hersteller: 'Apple',
        belegId: 1234,
        komponentenArtId: 1,
        komponentenAttribute: [
          { id: 2, value: '4GB RAM' },
          { id: 1, value: '293474-34764' },
          { id: 3, value: 'GTX 2070' }
        ]
      },
      {
        id: 11,
        bezeichnung: 'Computer',
        raumId: 222,
        lieferantId: 48768,
        einkaufsdatum: '2019-07-13',
        geweahrleistungsdauer: 12,
        notiz: 'Ein komischer Rechner',
        hersteller: 'Apple',
        belegId: 1234,
        komponentenArtId: 1,
        komponentenAttribute: [
          { id: 2, value: '4GB RAM' },
          { id: 1, value: '293474-34764' },
          { id: 3, value: 'GTX 2070' }
        ]
      },
      {
        id: 11,
        bezeichnung: 'Computer',
        raumId: 222,
        lieferantId: 48768,
        einkaufsdatum: '2019-07-13',
        geweahrleistungsdauer: 12,
        notiz: 'Ein komischer Rechner',
        hersteller: 'Apple',
        belegId: 1234,
        komponentenArtId: 1,
        komponentenAttribute: [
          { id: 2, value: '4GB RAM' },
          { id: 1, value: '293474-34764' },
          { id: 3, value: 'GTX 2070' }
        ]
      },
      {
        id: 11,
        bezeichnung: 'Computer',
        raumId: 222,
        lieferantId: 48768,
        einkaufsdatum: '2019-07-13',
        geweahrleistungsdauer: 12,
        notiz: 'Ein komischer Rechner',
        hersteller: 'Apple',
        belegId: 1234,
        komponentenArtId: 1,
        komponentenAttribute: [
          { id: 2, value: '4GB RAM' },
          { id: 1, value: '293474-34764' },
          { id: 3, value: 'GTX 2070' }
        ]
      }
    ];
  }

  getDeviceAttributes() {
    return [
      {
        id: 1,
        bezeichnung: 'Seriennummer'
      },
      {
        id: 2,
        bezeichung: 'RAM Größe'
      },
      {
        id: 3,
        bezeichnung: 'Lumen'
      }
    ];
  }

  mapToDCards(devices: Device[]): Card[] {
    let cards: Card[] = [];
    for (let i = 0; i < devices.length; i++) {
      let card = new Card(
        devices[i].bezeichnung,
        devices[i].hersteller,
        false,
        devices[i].komponentenAttribute.find(
          attr => attr.id === this.getSeriennummerId()
        ).value
      );
      cards[i] = card;
    }
    return cards;
  }

  showDetailedDevice(id: number) {
    this._router.navigate(['devices/' + id]);
  }

  getSeriennummerId(): number {
    return this.getDeviceAttributes().find(
      attr => attr.bezeichnung === 'Seriennummer'
    ).id;
  }
}
