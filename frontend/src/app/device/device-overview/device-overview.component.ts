import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/fe-entities/card.entity';
import { Device } from 'src/app/fe-entities/device.entity';

import { ApiClientService } from '../../core/api-client.service';
import { DeviceAttribute } from '../../fe-entities/device-attibute.entity';

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

  public deviceAttributes: DeviceAttribute[];
  public SearchText = '';

  constructor(private _router: Router, private api: ApiClientService) { }

  ngOnInit() {
    this.api.getAllComponentAttributes().then(resp => {
      this.deviceAttributes = resp;
      this.api.getAllComponents().then(res => {
        this.devices = res;
        this.deviceCards = this.mapToDCards(res);
      });
    });
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
    return this.deviceAttributes.find(
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
