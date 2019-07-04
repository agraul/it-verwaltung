import { Pipe, PipeTransform } from '@angular/core';
import { Room } from '../fe-entities/room.entity';
import { Card } from '../fe-entities/card.entity';

@Pipe({
  name: 'roomPipe'
})
export class RoomPipePipe implements PipeTransform {

  transform(allRooms: Card[], search: string): any {
    if (!allRooms || !search) {
      return allRooms;
  }
    console.log(allRooms[1].body);
    console.log(allRooms.filter(room =>{return room}));
    
    return allRooms.filter(room => room.header   === search||room.body === search);
  }

}
