import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { DeviceType } from 'src/app/fe-entities/device-type.entity';
import { Room } from 'src/app/fe-entities/room.entity';
import { DeviceAttribute } from 'src/app/fe-entities/device-attibute.entity';

@Component({
  selector: 'app-device-detailed',
  templateUrl: './device-detailed.component.html',
  styleUrls: ['./device-detailed.component.less']
})
export class DeviceDetailedComponent implements OnInit {

  public basicForm: FormGroup;

  private rooms: Room[];

  private deliverers: any [];

  private deviceTypes: DeviceType[];

  public multiForm: FormGroup;

  private currentTypeId: number;

  public currentAttributes: DeviceAttribute[];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // TODO: get from BE; pflichtfelder; daten laden; als vorlage;
    this.deliverers = [
      {
        id: 1,
        firmenname: 'Huber CO'
      },
      {
        id: 2,
        firmenname: 'Moritz GmbH'
      }
    ];

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
      deviceType: '',
      attributes: this.formBuilder.array([])
    });

    this.multiForm = this.formBuilder.group({
      array: this.formBuilder.array([''])
    });
  }

  public sortedRooms(): Room[] {
    return this.rooms.sort((a, b) => a.nr.localeCompare(b.nr));
  }

  public sortedDeviceTypes(): DeviceType[] {
    return this.deviceTypes.sort((a, b) => a.bezeichnung.localeCompare(b.bezeichnung));
  }

  public sortedDeliverers(): DeviceType[] {
    return this.deliverers.sort((a, b) => a.firmenname.localeCompare(b.firmenname));
  }

  public getAttributes(): DeviceAttribute[] {
    const att = this.deviceTypes.find(
      type => type.id === Number(this.basicForm.get('deviceType').value)).attributes.filter(attr => attr.bezeichnung !== 'Seriennummer');
    const formArray = this.basicForm.get('attributes') as FormArray;
    formArray.controls.splice(0);
    for (const i of att) {
      formArray.push(this.formBuilder.control(''));
    }
    return att;
  }

  public isDeviceTypeSet(): boolean {
    return this.basicForm.get('deviceType').value !== '';
  }

  public getSelectedDeviceType(): DeviceType {
    return this.deviceTypes.find(type => type.id === Number(this.basicForm.get('deviceType').value));
  }

  public isDeviceTypeSW(): boolean {
    return this.getSelectedDeviceType() ? this.getSelectedDeviceType().isSoftware : false;
  }

  public getMultiLabel(): string {
    return this.isDeviceTypeSW() ? 'Raum' : 'Seriennummer';
  }

  public save(): void {
    if (this.isDeviceTypeSW()) {
      const returnObj = {
        hersteller: this.basicForm.value.producer,
        bezeichnung: this.basicForm.value.name,
        gewaehrleistung: this.basicForm.value.warranty,
        lieferant: this.basicForm.value.deliverer,
        komponentenart: this.basicForm.value.deviceType,
        attribute: this.mapAttributes(),
        raeume: this.multiForm.get('array').value
      };
      console.log(returnObj, '!');
    } else {
      const returnObj = {
        hersteller: this.basicForm.value.producer,
        bezeichnung: this.basicForm.value.name,
        gewaehrleistung: this.basicForm.value.warranty,
        lieferant: this.basicForm.value.deliverer,
        komponentenart: this.basicForm.value.deviceType,
        attribute: this.mapAttributes(),
        raum: this.basicForm.value.room
      };
      const returnObjs = [];
      this.multiForm.get('array').value.forEach(serial => {
        const current = returnObj;
        current.attribute.push({
          attributid: this.getSelectedDeviceType().attributes.find(type => type.bezeichnung === 'Seriennummer').id,
          wert: serial
        });
        returnObjs.push(current);
      });
      console.log(returnObjs, '!');
      // TODO: send to BE;
    }
  }

  public changeType(): void {
    if (this.currentTypeId === this.getSelectedDeviceType().id) {
      return;
    }
    this.currentTypeId = this.getSelectedDeviceType().id;
    this.currentAttributes = this.getAttributes();
  }

  private mapAttributes(): {attributid: number, wert: string}[] {
    let i;
    const retVal = [];
    for (i = 0; i < this.currentAttributes.length; i++) {
        retVal.push({
          attributid: this.currentAttributes[i].id,
          wert: this.basicForm.value.attributes[i]
        });
    }
    return retVal;
  }

}
