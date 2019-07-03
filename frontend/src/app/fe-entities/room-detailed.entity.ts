import { HComponent } from './component.entity';


export class RoomDetailed {
    id: number;
    nr: string;
    bezeichnung: string;
    notiz: string;
    komponenten: HComponent[] = [];
}