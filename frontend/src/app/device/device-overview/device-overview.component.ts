import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/fe-entities/card.entity';
import { Device } from 'src/app/fe-entities/device.entity';

@Component({
  selector: 'app-device-overview',
  templateUrl: './device-overview.component.html',
  styleUrls: ['./device-overview.component.less']
})
export class DeviceOverviewComponent implements OnInit {
  public devices: Device[];
  public deviceCards: Card[];

  // For Selecting Devices
  public selectedDevices = new Array();
  public selectModeActive = false;
  public selectButtonValue = 'Auswahl';

  public deviceAttributes;
  public SearchText = '';

  constructor(private _router: Router) { }

  ngOnInit() {
    this.devices = this.getDevices();
    this.deviceAttributes = this.getDeviceAttributes();
    this.deviceCards = this.mapToDCards(this.devices);
  }

  getDevices(): Device[] {
    return [
      {
        id: 1,
        bezeichnung: 'Computer',
        raum_id: 222,
        lieferant_id: 48768,
        einkaufsdatum: '2019-07-13',
        geweahrleistungsdauer: 12,
        notiz: 'Ein komischer Rechner',
        hersteller: 'Apple',
        beleg_id: 1234,
        komponentenartenid: 1,
        attribute: [
          { id: 2, value: '4GB RAM' },
          { id: 1, value: '293474-34764' },
          { id: 3, value: 'GTX 2070' }
        ]
      },
      {
        id: 12,
        bezeichnung: 'Computer',
        raum_id: 222,
        lieferant_id: 48768,
        einkaufsdatum: '2019-07-13',
        geweahrleistungsdauer: 12,
        notiz: 'Ein komischer Rechner',
        hersteller: 'Apple',
        beleg_id: 1234,
        komponentenartenid: 1,
        attribute: [
          { id: 2, value: '4GB RAM' },
          { id: 1, value: '293474-34764' },
          { id: 3, value: 'GTX 2070' }
        ]
      },
      {
        id: 13,
        bezeichnung: 'Computer',
        raum_id: 222,
        lieferant_id: 48768,
        einkaufsdatum: '2019-07-13',
        geweahrleistungsdauer: 12,
        notiz: 'Ein komischer Rechner',
        hersteller: 'Apple',
        beleg_id: 1234,
        komponentenartenid: 1,
        attribute: [
          { id: 2, value: '4GB RAM' },
          { id: 1, value: '293474-34764' },
          { id: 3, value: 'GTX 2070' }
        ]
      },
      {
        id: 14,
        bezeichnung: 'Computer',
        raum_id: 222,
        lieferant_id: 48768,
        einkaufsdatum: '2019-07-13',
        geweahrleistungsdauer: 12,
        notiz: 'Ein komischer Rechner',
        hersteller: 'Apple',
        beleg_id: 1234,
        komponentenartenid: 1,
        attribute: [
          { id: 2, value: '4GB RAM' },
          { id: 1, value: '293474-34764' },
          { id: 3, value: 'GTX 2070' }
        ]
      },
      {
        id: 15,
        bezeichnung: 'Computer',
        raum_id: 222,
        lieferant_id: 48768,
        einkaufsdatum: '2019-07-13',
        geweahrleistungsdauer: 12,
        notiz: 'Ein komischer Rechner',
        hersteller: 'Apple',
        beleg_id: 1234,
        komponentenartenid: 1,
        attribute: [
          { id: 2, value: '4GB RAM' },
          { id: 1, value: '293474-34764' },
          { id: 3, value: 'GTX 2070' }
        ]
      },
      {
        id: 16,
        bezeichnung: 'Computer',
        raum_id: 222,
        lieferant_id: 48768,
        einkaufsdatum: '2019-07-13',
        geweahrleistungsdauer: 12,
        notiz: 'Ein komischer Rechner',
        hersteller: 'Apple',
        beleg_id: 1234,
        komponentenartenid: 1,
        attribute: [
          { id: 2, value: '4GB RAM' },
          { id: 1, value: '293474-34764' },
          { id: 3, value: 'GTX 2070' }
        ]
      },
      {
        id: 17,
        bezeichnung: 'Computer',
        raum_id: 222,
        lieferant_id: 48768,
        einkaufsdatum: '2019-07-13',
        geweahrleistungsdauer: 12,
        notiz: 'Ein komischer Rechner',
        hersteller: 'Apple',
        beleg_id: 1234,
        komponentenartenid: 1,
        attribute: [
          { id: 2, value: '4GB RAM' },
          { id: 1, value: '293474-34764' },
          { id: 3, value: 'GTX 2070' }
        ]
      },
      {
        id: 18,
        bezeichnung: 'Computer',
        raum_id: 222,
        lieferant_id: 48768,
        einkaufsdatum: '2019-07-13',
        geweahrleistungsdauer: 12,
        notiz: 'Ein komischer Rechner',
        hersteller: 'Apple',
        beleg_id: 1234,
        komponentenartenid: 1,
        attribute: [
          { id: 2, value: '4GB RAM' },
          { id: 1, value: '293474-34764' },
          { id: 3, value: 'GTX 2070' }
        ]
      },
      {
        id: 19,
        bezeichnung: 'Computer',
        raum_id: 222,
        lieferant_id: 48768,
        einkaufsdatum: '2019-07-13',
        geweahrleistungsdauer: 12,
        notiz: 'Ein komischer Rechner',
        hersteller: 'Apple',
        beleg_id: 1234,
        komponentenartenid: 1,
        attribute: [
          { id: 2, value: '4GB RAM' },
          { id: 1, value: '293474-34764' },
          { id: 3, value: 'GTX 2070' }
        ]
      },
      {
        id: 20,
        bezeichnung: 'Computer',
        raum_id: 222,
        lieferant_id: 48768,
        einkaufsdatum: '2019-07-13',
        geweahrleistungsdauer: 12,
        notiz: 'Ein komischer Rechner',
        hersteller: 'Apple',
        beleg_id: 1234,
        komponentenartenid: 1,
        attribute: [
          { id: 2, value: '4GB RAM' },
          { id: 1, value: '293474-34764' },
          { id: 3, value: 'GTX 2070' }
        ]
      },
      {
        id: 21,
        bezeichnung: 'Computer',
        raum_id: 222,
        lieferant_id: 48768,
        einkaufsdatum: '2019-07-13',
        geweahrleistungsdauer: 12,
        notiz: 'Ein komischer Rechner',
        hersteller: 'Apple',
        beleg_id: 1234,
        komponentenartenid: 1,
        attribute: [
          { id: 2, value: '4GB RAM' },
          { id: 1, value: '293474-34764' },
          { id: 3, value: 'GTX 2070' }
        ]
      },
      {
        id: 22,
        bezeichnung: 'Computer',
        raum_id: 222,
        lieferant_id: 48768,
        einkaufsdatum: '2019-07-13',
        geweahrleistungsdauer: 12,
        notiz: 'Ein komischer Rechner',
        hersteller: 'Apple',
        beleg_id: 1234,
        komponentenartenid: 1,
        attribute: [
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
        devices[i].attribute.find(
          attr => attr.id === this.getSeriennummerId()
        ).value
      );
      cards[i] = card;
    }
    return cards;
  }

  clickCard(id: number) {
    if (!this.selectModeActive) {
      this._router.navigate(['devices/' + id]);
    } else {
      // If Device is not Selected
      if (!this.selectedDevices.find(resp => resp === id)) {
        this.selectedDevices.push(id);
      }
      // IF device is already selected
      else {
        let index = this.selectedDevices.indexOf(id, 0);
        if (index > -1) {
          this.selectedDevices.splice(index, 1);
        }
      }

    }

  }

  getSeriennummerId(): number {
    return this.getDeviceAttributes().find(
      attr => attr.bezeichnung === 'Seriennummer'
    ).id;
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

  rejectDevices() {
    // TODO api call for moving Devices in Ausmusterungs Rooms
    let softwareDevices = new Array();
    let hardwareDevices = new Array();


    for (let i = 0; i < this.selectedDevices.length; i++) {

      if (this.deviceIsSoftware(this.selectedDevices[i])) {
        // Add SW Array
        softwareDevices.push(this.selectedDevices[i])
      } else {
        // Add HW Array
        hardwareDevices.push(this.selectedDevices[i])
      }

    }


    console.log('SW');
    console.log(softwareDevices);
    console.log('HW');
    console.log(hardwareDevices);

    // Delete Values
    this.toggleSelectMode();
  }

  // TODO api call if device is Software
  deviceIsSoftware(id: number): boolean {



    return false;
  }
}
