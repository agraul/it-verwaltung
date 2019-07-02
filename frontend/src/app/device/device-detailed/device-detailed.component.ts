import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Utils } from '../../core/utils';

@Component({
  selector: 'app-device-detailed',
  templateUrl: './device-detailed.component.html',
  styleUrls: ['./device-detailed.component.less']
})
export class DeviceDetailedComponent implements OnInit {

  public basicForm: FormGroup;

  public rooms;

  public deviceTypes;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.rooms = [
      {
        id: 1432,
        roomnr: '201',
      },
      {
        id: 837,
        roomnr: '015',
      },
      {
        id: 2931,
        roomnr: '189',
      },
      {
        id: 9483,
        roomnr: '031',
      },
      {
        id: 1382,
        roomnr: '205',
      }
    ];

    this.deviceTypes = [
      {
        id: 1,
        name: 'PC',
        attributes: [
          {
            id: 1,
            name: 'Seriennummer'
          },
          {
            id: 2,
            name: 'RAM Größe'
          },
          {
            id: 3,
            name: 'CPU Bezeichnung'
          }
        ],
        isSoftware: false
      },
      {
        id: 2,
        name: 'Beamer',
        attributes: [
          {
            id: 1,
            name: 'Seriennummer'
          },
          {
            id: 4,
            name: 'Lumen'
          }
        ],
        isSoftware: false
      },
      {
        id: 3,
        name: 'Software',
        attributes: [
          {
            id: 5,
            name: 'Versionsnummer'
          },
          {
            id: 6,
            name: 'Lizenztyp'
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

  public sortedRooms(): any {
    return Utils.sortObjectArrayAlphabetically(this.rooms, 'roomnr');
  }

}
