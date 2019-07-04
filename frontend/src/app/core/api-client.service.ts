import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';
import { Deliverer } from '../fe-entities/deliverer.entity';
import { DeviceAttribute } from '../fe-entities/device-attibute.entity';
import { DeviceType } from '../fe-entities/device-type.entity';
import { Device } from '../fe-entities/device.entity';
import { Roles } from '../fe-entities/roles.entity';
import { RoomDetailed } from '../fe-entities/room-detailed.entity';
import { Room } from '../fe-entities/room.entity';
import { User } from '../fe-entities/user.entity';
import { UserLogIn } from '../fe-entities/user-login-entity';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  constructor(private httpClient: HttpClient) { }

  public getAllRooms(): Promise<Room[]> {
    if (environment.isMock) {
      return Promise.resolve([
        {
          id: 1,
          nr: '123',
          bezeichnung: 'Computerraum',
          hat_notiz: true,
          komponenten_arten: ['PC', 'Beamer', 'Switch']
        },
        {
          id: 2,
          nr: '022',
          bezeichnung: 'Computerraum',
          hat_notiz: false,
          komponenten_arten: null
        },
        {
          id: 3,
          nr: '324',
          bezeichnung: 'Elektro',
          hat_notiz: true,
          komponenten_arten: ['PC', 'Beamer']
        }
      ]);
    }
    return this.httpClient.get<Room[]>(environment.url + '/room/all').toPromise();
  }

  public getAllGroups(): Observable<Roles[]> {
    if (environment.isMock) {
      return of([
        {
          id: 1,
          bezeichnung: 'Lehrkraft',
          privilegiert: false
        },
        {
          id: 2,
          bezeichnung: 'Systembetreuer',
          privilegiert: true
        }
      ]);
    } else {
      return this.httpClient.get<Roles[]>(environment.url + '/group/all');
    }
  }

  public getAllUser(): Promise<User[]> {
    if (environment.isMock) {
      return Promise.resolve([
        {
          userid: 1,
          username: 'ln@b3.de',
          lastname: 'Nürnberger',
          firstname: 'Lukas',
          groupid: 2,
          pw: '123'
        }
      ]);
    } else {
      return this.httpClient
        .get<User[]>(environment.url + '/user/all')
        .toPromise();
    }
  }

  public setUserPassword(body: any): Promise<void> {
    if (environment.isMock) {
      return Promise.resolve();
    } else {
      return this.httpClient
        .post<void>(environment.url + '/user/setpassword', body)
        .toPromise();
    }
  }

  public setUserGroupChange(body: any): Promise<void> {
    if (environment.isMock) {
      return Promise.resolve();
    } else {
      return this.httpClient
        .post<void>(environment.url + '/user/changegroup', body)
        .toPromise();
    }
  }

  public deleteUser(id: number): Promise<void> {
    if (environment.isMock) {
      return Promise.resolve();
    } else {
      return this.httpClient
        .get<void>(environment.url + '/user/delete?id=' + id)
        .toPromise();
    }
  }

  public registerUser(body: any): Promise<any> {
    if (environment.isMock) {
      return Promise.resolve();
    } else {
      return this.httpClient
        .post<any>(environment.url + '/user/register', body)
        .toPromise();
    }
  }

  public getAllDeliverer(): Promise<Deliverer[]> {
    if (environment.isMock) {
      return Promise.resolve([
        {
          id: 1,
          companyname: 'Tall Software',
          street: 'Tallstrasse 13',
          plz: '96047',
          place: 'Bamberg',
          tel: '0951000000',
          mobile: '0873 376461',
          fax: '040-999 8888',
          email: 'Tall.Software@gmail.de'
        },
        {
          id: 2,
          companyname: 'Easy Hardware',
          street: 'Nordweg 33',
          plz: '14770',
          place: 'Brandenburg',
          tel: '0338100000',
          mobile: '0929 123458',
          fax: '040-999 7889',
          email: 'Easy.Hardware@gmail.de'
        }
      ]);
    } else {
      return this.httpClient
        .get<Deliverer[]>(environment.url + '/supplier/all')
        .toPromise();
    }
  }

  public addDeliverer(body: Deliverer): Promise<any> {
    if (environment.isMock) {
      return Promise.resolve();
    } else {
      return this.httpClient
        .post<any>(environment.url + '/supplier/add', body)
        .toPromise();
    }
  }

  public deleteDeliverer(id: number): Promise<void> {
    if (environment.isMock) {
      return Promise.resolve();
    } else {
      return this.httpClient
        .get<void>(environment.url + '/supplier/delete?id=' + id)
        .toPromise();
    }
  }

  public updateDeliverer(body: Deliverer): Promise<void> {
    if (environment.isMock) {
      return Promise.resolve();
    } else {
      return this.httpClient
        .post<any>(environment.url + '/supplier/update', body)
        .toPromise();
    }
  }

  public getAllComponentAttributes(): Promise<DeviceAttribute[]> {
    if (environment.isMock) {
      return Promise.resolve([
        {
          id: 1,
          bezeichnung: 'Seriennummer',
        },
        {
          id: 2,
          bezeichnung: 'RAM'
        },
        {
          id: 3,
          bezeichnung: 'CPU'
        },
        {
          id: 4,
          bezeichnung: 'Festplatte'
        },
        {
          id: 5,
          bezeichnung: 'Festplatten Typ'
        },
        {
          id: 6,
          bezeichnung: 'Grafikausgang'
        },
        {
          id: 19,
          bezeichnung: 'Versionsnummer'
        },
        {
          id: 20,
          bezeichnung: 'Lizenztyp'
        },
        {
          id: 21,
          bezeichnung: 'Lizenzanzahl'
        },
        {
          id: 22,
          bezeichnung: 'Lizenzlaufzeit'
        },
        {
          id: 23,
          bezeichnung: 'Lizenzinformationen'
        },
        {
          id: 24,
          bezeichnung: 'Installationshinweise'
        },
        {
          id: 7,
          bezeichnung: 'Anzahl Ports'
        },
        {
          id: 8,
          bezeichnung: 'Uplinktyp'
        },
        {
          id: 9,
          bezeichnung: 'IP'
        },
        {
          id: 18,
          bezeichnung: 'Anschlusstyp'
        }
      ]);
    } else {
      return this.httpClient
        .get<DeviceAttribute[]>(environment.url + '/componentattribute/all')
        .toPromise();
    }
  }

  public addComponentAttribute(bez: string): Promise<void> {
    if (environment.isMock) {
      return Promise.resolve();
    } else {
      return this.httpClient
        .post<any>(environment.url + '/componentattribute/add', { attribute: bez })
        .toPromise();
    }
  }

  public deleteComponentAttribute(id: number): Promise<void> {
    if (environment.isMock) {
      return Promise.resolve();
    } else {
      return this.httpClient
        .get<void>(environment.url + '/componentattribute/delete?id=' + id)
        .toPromise();
    }
  }

  public getAllComponentType(): Promise<DeviceType[]> {
    if (environment.isMock) {
      return Promise.resolve([
        {
          id: 1,
          bezeichnung: 'PC',
          is_software: false,
          attribute: [
            {
              id: 1,
              bezeichnung: 'Seriennummer'
            },
            {
              id: 2,
              bezeichnung: 'RAM'
            },
            {
              id: 3,
              bezeichnung: 'CPU'
            }
          ]
        },
        {
          id: 2,
          bezeichnung: 'Switch',
          is_software: false,
          attribute: [
            {
              id: 1,
              bezeichnung: 'Seriennummer'
            },
            {
              id: 7,
              bezeichnung: 'Anzahl Ports'
            },
            {
              id: 8,
              bezeichnung: 'Uplinktyp'
            }
          ]
        },
        {
          id: 3,
          bezeichnung: 'Router',
          is_software: false,
          attribute: [
            {
              id: 1,
              bezeichnung: 'Seriennummer'
            },
            {
              id: 7,
              bezeichnung: 'Anzahl Ports'
            },
            {
              id: 9,
              bezeichnung: 'IP'
            }
          ]
        },
        {
          id: 7,
          bezeichnung: 'Visualizer',
          is_software: false,
          attribute: [
            {
              id: 1,
              bezeichnung: 'Seriennummer'
            },
            {
              id: 18,
              bezeichnung: 'Anschlusstyp'
            }
          ]
        },
        {
          id: 8,
          bezeichnung: 'Software',
          is_software: true,
          attribute: [
            {
              id: 19,
              bezeichnung: 'Versionsnummer'
            },
            {
              id: 20,
              bezeichnung: 'Lizenztyp'
            },
            {
              id: 21,
              bezeichnung: 'Lizenzanzahl'
            },
            {
              id: 22,
              bezeichnung: 'Lizenzlaufzeit'
            },
            {
              id: 23,
              bezeichnung: 'Lizenzinformationen'
            },
            {
              id: 24,
              bezeichnung: 'Installationshinweise'
            }
          ]
        }
      ]);
    } else {
      return this.httpClient
        .get<DeviceType[]>(environment.url + '/componenttype/all')
        .toPromise();
    }
  }

  public deleteComponentType(id: number): Promise<void> {
    if (environment.isMock) {
      return Promise.resolve();
    } else {
      return this.httpClient
        .get<void>(environment.url + '/componenttype/delete?id=' + id)
        .toPromise();
    }
  }

  public addNewComponentType(body: any): Promise<any> {
    if (environment.isMock) {
      return Promise.resolve();
    } else {
      return this.httpClient
        .post<any>(environment.url + '/componenttype/add', body)
        .toPromise();
    }
  }

  public updateComponentType(body: any): Promise<any> {
    if (environment.isMock) {
      return Promise.resolve();
    } else {
      return this.httpClient
        .post<any>(environment.url + '/componenttype/update', body)
        .toPromise();
    }
  }

  public getComponentById(id: number): Promise<Device> {
    if (environment.isMock) {
      return Promise.resolve({
        id: 11,
        bezeichnung: 'Computer',
        raum_id: 2,
        lieferant_id: 2,
        einkaufsdatum: '2019-07-13',
        geweahrleistungsdauer: 12,
        notiz: 'Ein komischer Rechner',
        hersteller: 'Apple',
        beleg_id: 1234,
        komponentenartenid: 1,
        attribute: [
          { id: 2, value: '4GB RAM' },
          { id: 1, value: '293474-34764' },
          { id: 3, value: 'GTX 2070' }
        ]
      });
    } else {
      return this.httpClient.get<Device>(environment.url + '/component/detail?id=' + id).toPromise();
    }
  }

  public createNewComponent(body: Device): Promise<any> {
    if (environment.isMock) {
      return Promise.resolve({
        id: Math.random() * 100
      });
    } else {
      return this.httpClient.post(environment.url + '/component/add', body).toPromise();
    }
  }

  public updateComponent(body: Device): Promise<void> {
    return this.httpClient.post<void>(environment.url + '/component/update', body).toPromise();
  }

  public removeRoomsToSoftware(id: number): Promise<void> {
    return this.httpClient.get<void>(environment.url + '/software/delete?id=' + id).toPromise();
  }

  public addSoftwareToRoom(body: any): Promise<void> {
    return this.httpClient.post<void>(environment.url + '/software/add', body).toPromise();
  }

  public getAllRoomsToSoftware(id: number): Promise<any> {
    return this.httpClient.get<any>(environment.url + '/software/all?id=' + id).toPromise();
  }

  public createNewRoom(body: { nr: string, bezeichung: string }): Promise<void> {
    return this.httpClient.post<void>(environment.url + '/room/add', body).toPromise();
  }

  public getRoomDetail(id: number): Promise<RoomDetailed> {
    return this.httpClient.get<RoomDetailed>(environment.url + '/room/detail?id=' + id).toPromise();
  }

  public deleteRoom(id: number): Promise<void> {
    return this.httpClient.get<void>(environment.url + '/room/delete?id=' + id).toPromise();
  }

  public editRoom(body: { id: number, nr: string, bezeichung: string }): Promise<void> {
    return this.httpClient.post<void>(environment.url + '/room/edit', body).toPromise();
  }

  public changeRoomNote(body: { id: number, note: string }): Promise<void> {
    return this.httpClient.post<void>(environment.url + '/room/note', body).toPromise();
  }

  public getAllComponents(): Promise<Device[]> {
    return this.httpClient.get<Device[]>(environment.url + '/component/all').toPromise();
  }

  public changeRoom(id: number, roomId: number): Promise<void> {
    return this.httpClient.get<void>(environment.url + '/room/changeRoom?id=' + id + '&room_id=' + roomId).toPromise();
  }

  public logInAndGetToken(creds: UserLogIn): Promise<any> {
    return this.httpClient.get<any>(environment.url + '/user/login?usr='+creds.username+'&pw='+creds.passwort).toPromise();
  }
}
