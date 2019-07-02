import { DeviceAttribute } from './device-attibute.entity';

/**
 * Enity for deviceType. Contains id, name, isSoftware and attributes.
 */
export class DeviceType {

  id: number;
  bezeichnung: string;
  isSoftware: boolean;
  attributes: DeviceAttribute[];

}
