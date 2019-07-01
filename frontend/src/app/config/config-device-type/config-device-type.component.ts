import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-config-device-type',
  templateUrl: './config-device-type.component.html',
  styleUrls: ['./config-device-type.component.less']
})
export class ConfigDeviceTypeComponent implements OnInit {

  // TODO: set data types for variables.
  public deviceTypes = [];

  public deviceAttributes = [];

  public activeType = 0;

  public newDeviceType = new FormControl('');

  public newDeviceAttribute = new FormControl('');

  constructor() { }

  ngOnInit() {
    // TODO: load from BE;
    this.deviceAttributes = [
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
        name: 'Lumen'
      }
    ];
    this.deviceTypes = [
      {
        id: 1,
        name: 'PC',
        attributes: [ 1, 2 ],
        isSoftware: false
      },
      {
        id: 2,
        name: 'Beamer',
        attributes: [ 3 ],
        isSoftware: false
      }
    ];
  }

  /**
   * Sets selected deviceType active.
   * Therefor the index of the selected type is safed
   * and value of the software flag is set.
   * @param index of selected deviceType list item
   */
  public setTypeActive(index: number): void {
    this.activeType = index;
    // checkbox !!
  }

  /**
   * Adds or removes the id of the clicked attribute from the active deviceType.
   * @param index of selected attribute list item
   */
  public toggleDeviceAttribute(index: number): void {
    const attribute = this.deviceAttributes[index];
    if (attribute) {
      const id = attribute.id;
      if (this.deviceTypes[this.activeType].attributes.indexOf(id) === -1) {
        this.deviceTypes[this.activeType].attributes.push(id);
      } else {
        const found = this.deviceTypes[this.activeType].attributes.indexOf(id);
        this.deviceTypes[this.activeType].attributes.splice(found, 1);
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
    let retVal = false;
    if (attribute) {
      const id = attribute.id;
      retVal = this.deviceTypes[this.activeType].attributes.indexOf(id) !== -1;
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
        name: this.newDeviceType.value,
        attributes: [ ],
        isSoftware: false
      }
    );
    this.newDeviceType.setValue('');
  }

  /**
   * Adds a new deviceAttribute to the list.
   * Directly saved in database.
   */
  public addNewDeviceAttribute(): void {
    // TODO: Persist directly in DB for ID, maybe not if BE can gets whole Device with attributes id and name;
    this.deviceAttributes.push(
      {
        id: Math.random() * 100,
        name: this.newDeviceAttribute.value
      }
    );
    this.newDeviceAttribute.setValue('');
  }

  /**
   * Saves the current deviceType.
   */
  public saveDeviceType(): void {
    // TODO: send to BE; Maybe split between POST and PUT depending on id set or not;
  }

  /**
   * Deletes the current deviceType
   */
  public deleteDeviceType(): void {
    // TODO: request to BE; Error handling? DeviceType in Use...
    this.deviceTypes.splice(this.activeType, 1);
    this.activeType = 0;
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
      retVal = this.deviceTypes.find(type => type.attributes.find(attr => attribute.id === attr));
    }
    return retVal;
  }

  /**
   * Deletes the passed device attribute.
   * @param index of selected device attribute
   */
  public deleteDeviceAttribute(index: number): void {
    // TODO: request to BE, if attributes are saved directly.
    this.deviceAttributes.splice(index, 1);
  }

}
