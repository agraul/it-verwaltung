import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DeviceType } from 'src/app/fe-entities/device-type.entity';

import { ApiClientService } from '../../core/api-client.service';
import { DeviceAttribute } from '../../fe-entities/device-attibute.entity';

@Component({
  selector: 'app-config-device-type',
  templateUrl: './config-device-type.component.html',
  styleUrls: ['./config-device-type.component.less']
})
export class ConfigDeviceTypeComponent implements OnInit {

  public deviceTypes: DeviceType[] = [];

  public deviceAttributes: DeviceAttribute[] = [];

  public activeType = 0;

  public newDeviceType = new FormControl('');

  public newDeviceAttribute = new FormControl('');

  constructor(private api: ApiClientService) { }

  ngOnInit() {
    this.api.getAllComponentAttributes().then(resp => this.deviceAttributes = resp);
    this.api.getAllComponentType().then(resp => this.deviceTypes = resp);
  }

  /**
   * Sets selected deviceType active.
   * Therefor the index of the selected type is safed
   * and value of the software flag is set.
   * @param index of selected deviceType list item
   */
  public setTypeActive(index: number): void {
    this.activeType = index;
  }

  /**
   * Adds or removes the id of the clicked attribute from the active deviceType.
   * @param index of selected attribute list item
   */
  public toggleDeviceAttribute(index: number): void {
    const attribute = this.deviceAttributes[index];
    if (attribute) {
      const id = attribute.id;
      if (this.deviceTypes[this.activeType].attribute.find(attr => attr.id === id) === undefined) {
        this.deviceTypes[this.activeType].attribute.push(attribute);
      } else {
        const found = this.deviceTypes[this.activeType].attribute.findIndex(attr => attr.id === id);
        this.deviceTypes[this.activeType].attribute.splice(found, 1);
      }
    }
  }

  /**
   * Checks if the current deviceType has the passed attribute set.
   * @param index of current attibute list item
   * @returns <code>true</code> if deviceType has attribute set else <code>false</code>
   */
  public checkDeviceAttributeActive(index: number): boolean {
    const attribute = this.deviceAttributes[index];
    const deviceType = this.deviceTypes[this.activeType];
    let retVal = false;
    if (attribute && deviceType) {
      const id = attribute.id;
      retVal = deviceType.attribute.find(attr => attr.id === id) !== undefined;
    }
    return retVal;
  }

  /**
   * Adds a new deviceType to the list.
   * This deviceType will only be persisted when be saved by btn click.
   */
  public addNewDeviceType(): void {
    this.deviceTypes.push(
      {
        id: null,
        bezeichnung: this.newDeviceType.value,
        attribute: [],
        is_software: false
      }
    );
    this.newDeviceType.setValue('');
  }

  /**
   * Adds a new deviceAttribute to the list.
   * Directly saved in database.
   */
  public addNewDeviceAttribute(): void {
    this.api.addComponentAttribute(this.newDeviceAttribute.value).then(() => {
      this.api.getAllComponentAttributes().then(resp => this.deviceAttributes = resp);
      this.newDeviceAttribute.setValue('');
    }
    );
  }

  /**
   * Checks if the current new deviceAttribute exits already.
   * @returns <code>true</code> when already exits else <code>false</code>
   */
  public checkDuplicateDeviceAttribute(): boolean {
    return this.deviceAttributes.find(attr => attr.bezeichnung === this.newDeviceAttribute.value) === undefined;
  }

  /**
   * Saves the current deviceType.
   */
  public saveDeviceType(): void {
    const currentDevice = this.deviceTypes[this.activeType];
    currentDevice.attribute = currentDevice.attribute.filter(attr => this.deviceAttributes.some(dattr => dattr.id === attr.id));
    if (!currentDevice.id) {
      this.api.addNewComponentType(currentDevice).then(() => this.api.getAllComponentType().then(resp => this.deviceTypes = resp));
    } else {
      this.api.updateComponentType(currentDevice).then();
    }
  }

  /**
   * Deletes the current deviceType
   */
  public deleteDeviceType(): void {
    this.api.deleteComponentType(this.deviceTypes[this.activeType].id).then(() => {
      this.api.getAllComponentType().then(resp => {
        this.deviceTypes = resp;
        this.activeType = 0;
      });
    });
  }

  /**
   * Checks if the passed attribute is deleteable.
   * Therefor it can not be used by a deviceType.
   * @param index of current device attribute
   * @returns <code>true</code> if attribute is not used else <code>false</code>
   */
  public checkAttributeDeleteable(index: number): boolean {
    const attribute = this.deviceAttributes[index];
    let retVal = false;
    if (attribute) {
      retVal = this.deviceTypes.find(type => type.attribute.find(attr => attribute.id === attr.id) !== undefined) !== undefined;
    }
    return retVal;
  }

  /**
   * Deletes the passed device attribute.
   * @param index of selected device attribute
   */
  public deleteDeviceAttribute(index: number): void {
    this.api.deleteComponentAttribute(this.deviceAttributes[index].id).then(() =>
      this.api.getAllComponentAttributes().then(resp => this.deviceAttributes = resp)
    );
  }


  /**
   * Sorts the deviceType array alphabetically and returns it.
   */
  public sortedDeviceTypes(): DeviceType[] {
    return this.deviceTypes.sort((a, b) => a.bezeichnung.localeCompare(b.bezeichnung));
  }

  /**
   * Sorts the deviceAttribute array alphabetically and returns it.
   */
  public sortedDeviceAttributes(): DeviceAttribute[] {
    return this.deviceAttributes.sort((a, b) => a.bezeichnung.localeCompare(b.bezeichnung));
  }

}
