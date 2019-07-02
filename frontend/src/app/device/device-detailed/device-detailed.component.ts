import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DeviceType } from 'src/app/fe-entities/device-type.entity';
import { Room } from 'src/app/fe-entities/room.entity';

@Component({
  selector: 'app-device-detailed',
  templateUrl: './device-detailed.component.html',
  styleUrls: ['./device-detailed.component.less']
})
export class DeviceDetailedComponent implements OnInit {

  public basicForm: FormGroup;

  public rooms: Room[];

  public deviceTypes: DeviceType[];

  public typeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.rooms = [
      {
        id: 1,
        nr: '012',
        bezeichnung: 'Computerraum',
        hat_notiz: true,
        komponentenarten: null
      },
      {
        id: 2,
        nr: '222',
        bezeichnung: 'Computerraum',
        hat_notiz: false,
        komponentenarten: null
      },
      {
        id: 3,
        nr: '154',
        bezeichnung: 'Computerraum',
        hat_notiz: true,
        komponentenarten: null
      }
    ];

    this.deviceTypes = [
      {
        id: 1,
        bezeichnung: 'PC',
        attributes: [
          {
            id: 1,
            bezeichnung: 'Seriennummer'
          },
          {
            id: 2,
            bezeichnung: 'RAM Größe'
          },
          {
            id: 3,
            bezeichnung: 'CPU Bezeichnung'
          }
        ],
        isSoftware: false
      },
      {
        id: 2,
        bezeichnung: 'Beamer',
        attributes: [
          {
            id: 1,
            bezeichnung: 'Seriennummer'
          },
          {
            id: 4,
            bezeichnung: 'Lumen'
          }
        ],
        isSoftware: false
      },
      {
        id: 3,
        bezeichnung: 'Software',
        attributes: [
          {
            id: 5,
            bezeichnung: 'Versionsnummer'
          },
          {
            id: 6,
            bezeichnung: 'Lizenztyp'
          }
        ],
        isSoftware: true
      }
    ];

    this.basicForm = this.formBuilder.group({
      producer: '',
      name: '',
      room: '',
      warranty: '',
      deliverer: '',
      note: '',
      deviceType: ''
    });
  }

  public sortedRooms(): Room[] {
    return this.rooms.sort((a, b) => a.nr.localeCompare(b.nr));
  }

  public sortedDeviceTypes(): DeviceType[] {
    return this.deviceTypes.sort((a, b) => a.bezeichnung.localeCompare(b.bezeichnung));
  }

  public getAttributes(): string[] {
    const att = this.deviceTypes.find(
      type => type.id === Number(this.basicForm.get('deviceType').value)).attributes.map(
        attr => attr.bezeichnung);
    this.typeForm = this.formBuilder.group({
      ...att
    });
    return att;
  }

  public isDeviceTypeSet(): boolean {
    return this.basicForm.get('deviceType').value !== '';
  }

}
