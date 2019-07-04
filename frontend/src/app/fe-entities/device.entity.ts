import { DeviceAttribut } from './device-attribute.entity';

export class Device {
  id: number;
  bezeichnung: string;
  raeume_id: number;
  lieferant_id: number;
  einkaufsdatum: string;
  gewaehrleistungsdauer: number;
  notiz: string;
  hersteller: string;
  beleg_id: number;
  komponentenartenid: number;
  attribute: DeviceAttribut[] = [];
}
