import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DeviceAttribute } from 'src/app/fe-entities/device-attibute.entity';
import { DeviceAttribut } from 'src/app/fe-entities/device-attribute.entity';
import { DeviceType } from 'src/app/fe-entities/device-type.entity';
import { Device } from 'src/app/fe-entities/device.entity';
import { Room } from 'src/app/fe-entities/room.entity';

import { ApiClientService } from '../../core/api-client.service';
import { Deliverer } from '../../fe-entities/deliverer.entity';

@Component({
  selector: 'app-device-detailed',
  templateUrl: './device-detailed.component.html',
  styleUrls: ['./device-detailed.component.less']
})
export class DeviceDetailedComponent implements OnInit {
  public basicForm: FormGroup;

  private rooms: Room[];

  private deliverers: Deliverer[];

  private deviceTypes: DeviceType[];

  public multiForm: FormGroup;

  private currentTypeId: number;

  public currentAttributes: DeviceAttribute[];

  public flagExtendable = true;

  public flagReadOnly = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private api: ApiClientService
  ) { }

  ngOnInit() {
    this.api.getAllDeliverer().then(resp => this.deliverers = resp);
    this.api.getAllRooms().then(resp => this.rooms = resp);

    this.api.getAllComponentType().then(resp => this.deviceTypes = resp);

    const id = this.route.snapshot.paramMap.get('id');

    this.multiForm = this.formBuilder.group({
      array: this.formBuilder.array([''])
    });

    if (id === 'create') {
      this.basicForm = this.formBuilder.group({
        id: '',
        producer: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        room: new FormControl('', Validators.required),
        purchase: new FormControl('', Validators.required),
        warranty: new FormControl('', Validators.required),
        deliverer: new FormControl('', Validators.required),
        proof: new FormControl('', Validators.required),
        deviceType: new FormControl('', Validators.required),
        attributes: this.formBuilder.array([])
      });
    } else {
      this.api.getComponentById(Number(id)).then(resp => {
        this.flagExtendable = false;
        const selectedDevice = resp;

        this.basicForm = this.formBuilder.group({
          id: selectedDevice.id,
          producer: new FormControl(selectedDevice.hersteller, Validators.required),
          name: new FormControl(selectedDevice.bezeichnung, Validators.required),
          room: new FormControl(selectedDevice.raumId, Validators.required),
          purchase: new FormControl(selectedDevice.einkaufsdatum, Validators.required),
          warranty: new FormControl(selectedDevice.geweahrleistungsdauer, Validators.required),
          deliverer: new FormControl(selectedDevice.lieferantId, Validators.required),
          proof: new FormControl(selectedDevice.belegId, Validators.required),
          deviceType: new FormControl({
            value: selectedDevice.komponentenArtId,
            disabled: true
          }),
          attributes: this.formBuilder.array([])
        });

        this.changeType(selectedDevice.komponentenAttribute);

        if (!this.isDeviceTypeSW()) {
          (this.multiForm.get('array') as FormArray).controls[0].setValue(
            selectedDevice.komponentenAttribute.find(
              attr => attr.id === this.getIdOfSerialnumber()
            ).value
          );
        } else {
          this.api.getAllRoomsToSoftware(Number(id)).then(res => {
            res.forEach(room => {
              (this.multiForm.get('array') as FormArray).push(
                this.formBuilder.control(room.sir_r_id)
              );
            });
            (this.multiForm.get('array') as FormArray).removeAt(0);
          });
        }
      });

    }
    if (this.flagReadOnly) {
      this.basicForm.disable();
      this.multiForm.disable();
    }
  }

  public get title() {
    return this.flagExtendable ? 'Neue Komponente' : (this.basicForm.value.name ? this.basicForm.value.name : 'Komponente');
  }


  public sortedRooms(): Room[] {
    return this.rooms ? this.rooms.sort((a, b) => a.nr.localeCompare(b.nr)) : [];
  }

  public sortedDeviceTypes(): DeviceType[] {
    return this.deviceTypes ? this.deviceTypes.sort((a, b) =>
      a.bezeichnung.localeCompare(b.bezeichnung)
    ) : [];
  }

  public sortedDeliverers(): Deliverer[] {
    return this.deliverers ? this.deliverers.sort((a, b) =>
      a.companyname.localeCompare(b.companyname)
    ) : [];
  }

  public getAttributes(values?: DeviceAttribut[]): DeviceAttribute[] {
    const att = this.deviceTypes
      .find(type => type.id === Number(this.basicForm.get('deviceType').value))
      .attribute.filter(attr => attr.bezeichnung !== 'Seriennummer');
    const formArray = this.basicForm.get('attributes') as FormArray;
    formArray.controls.splice(0);
    if (values) {
      for (const i of att) {
        const attrValue = values.find(val => Number(val.id) === Number(i.id));
        formArray.push(
          this.formBuilder.control(attrValue ? attrValue.value : '')
        );
      }
    } else {
      for (const i of att) {
        formArray.push(this.formBuilder.control(''));
      }
    }
    return att;
  }

  public isDeviceTypeSet(): boolean {
    return this.basicForm.get('deviceType').value !== '';
  }

  public getSelectedDeviceType(): DeviceType {
    return this.sortedDeviceTypes().find(
      type => type.id === Number(this.basicForm.get('deviceType').value)
    );
  }

  public isDeviceTypeSW(): boolean {
    return this.getSelectedDeviceType()
      ? this.getSelectedDeviceType().is_software
      : false;
  }

  public getMultiLabel(): string {
    return this.isDeviceTypeSW() ? 'Raum' : 'Seriennummer';
  }

  public save(): void {
    if (this.isDeviceTypeSW()) {
      const returnObj: Device = {
        hersteller: this.basicForm.value.producer,
        bezeichnung: this.basicForm.value.name,
        geweahrleistungsdauer: this.basicForm.value.warranty,
        lieferantId: this.basicForm.value.deliverer,
        komponentenArtId: this.basicForm.controls.deviceType.value,
        komponentenAttribute: this.mapAttributes(),
        raumId: null,
        belegId: this.basicForm.value.proof,
        einkaufsdatum: this.basicForm.value.purchase,
        id: this.basicForm.value.id,
        notiz: null
      };
      const raeume = this.multiForm.get('array').value.filter(room => room);
      this.api.createNewComponent(returnObj).then(resp => {
        const id = resp.id;
        this.api.removeRoomsToSoftware(id).then(() => {
          raeume.forEach(raum => this.api.addSoftwareToRoom({
            component_Id: id,
            room_id: raum
          }));
        });
      });

    } else {
      const returnObj: Device = {
        hersteller: this.basicForm.value.producer,
        bezeichnung: this.basicForm.value.name,
        geweahrleistungsdauer: this.basicForm.value.warranty,
        lieferantId: this.basicForm.value.deliverer,
        komponentenArtId: this.basicForm.controls.deviceType.value,
        komponentenAttribute: this.mapAttributes(),
        raumId: this.basicForm.value.room,
        belegId: this.basicForm.value.proof,
        einkaufsdatum: this.basicForm.value.purchase,
        id: this.basicForm.value.id,
        notiz: null
      };
      const serialId = this.getIdOfSerialnumber();
      this.multiForm.get('array').value.forEach(serial => {
        if (serial) {
          const current = returnObj;
          current.komponentenAttribute.push({
            id: serialId,
            value: serial
          });
          console.log(current, '!');
          // TODO: send !!!HERE!!! to BE;
          current.komponentenAttribute.pop();
        }
      });
    }
  }

  public changeType(values?: DeviceAttribut[]): void {
    if (this.currentTypeId === this.getSelectedDeviceType().id) {
      return;
    }
    this.currentTypeId = this.getSelectedDeviceType().id;
    this.currentAttributes = this.getAttributes(values);
  }

  private mapAttributes(): DeviceAttribut[] {
    let i;
    const retVal: DeviceAttribut[] = [];
    for (i = 0; i < this.currentAttributes.length; i++) {
      retVal.push({
        id: this.currentAttributes[i].id,
        value: this.basicForm.value.attributes[i]
      });
    }
    return retVal;
  }

  private getIdOfSerialnumber(): number {
    return this.getSelectedDeviceType().attribute.find(
      type => type.bezeichnung === 'Seriennummer'
    ).id;
  }

  public blueprint(): void {
    this.flagExtendable = true;
    this.basicForm.get('id').setValue(null);
    if (!this.isDeviceTypeSW()) {
      (this.multiForm.get('array') as FormArray).controls[0].setValue('');
    }
  }

  public enableSaveBtn(): boolean {
    if (this.isDeviceTypeSW()) {
      return this.basicForm.valid;
    } else {
      return this.basicForm.valid && this.multiForm.get('array').value.find(value => value);
    }
  }
}
