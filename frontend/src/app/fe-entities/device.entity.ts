import { DeviceAttribut } from './device-attribute.entity';

export class Device {
    id: number;
    bezeichnung: string;
    raumId: number;
    lieferantId: number;
    einkaufsdatum: string;
    geweahrleistungsdauer: number;
    notiz: string;
    hersteller: string;
    belegId: number;
    komponentenArtId: number;
    komponentenAttribute: DeviceAttribut[] = [];
}