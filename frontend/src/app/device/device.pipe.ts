import { Pipe, PipeTransform } from '@angular/core';
import { DeviceCardComponent } from './device-card/device-card.component';
import { Card } from '../fe-entities/card.entity';

@Pipe({
  name: 'device'
})
export class DevicePipe implements PipeTransform {

  transform(allDevices: Card[], search: string): any {
    if (!allDevices || !search) {
      return allDevices;
  }
    console.log(allDevices[1].header);
    console.log(allDevices.filter(room =>{return room}));
    
    return allDevices.filter(device => device.header === search || device.footer === search || device.body === search);
  }

}
