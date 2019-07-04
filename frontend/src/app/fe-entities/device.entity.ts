import { DeviceAttribut } from './device-attribute.entity';

export class Device {
  id: number;
  bezeichnung: string;
  raum_id: number;
  lieferant_id: number;
  einkaufsdatum: string;
  geweahrleistungsdauer: number;
  notiz: string;
  hersteller: string;
  beleg_id: number;
  komponentenartenid: number;
  attribute: DeviceAttribut[] = [];
}
