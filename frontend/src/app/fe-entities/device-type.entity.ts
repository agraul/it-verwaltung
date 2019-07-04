import { DeviceAttribute } from './device-attibute.entity';

/**
 * Enity for deviceType. Contains id, name, is_software and attributes.
 */
export class DeviceType {

  id: number;
  bezeichnung: string;
  is_software: boolean;
  attribute: DeviceAttribute[];

}
