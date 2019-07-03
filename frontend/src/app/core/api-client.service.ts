import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';
import { Roles } from '../fe-entities/roles.entity';
import { Room } from '../fe-entities/room.entity';
import { User } from '../fe-entities/user.entity';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  constructor(private httpClient: HttpClient) { }

  public getAllRooms(): Observable<Room[]> {
    if (environment.isMock) {
      return of([
        {
          id: 1,
          nr: '123',
          bezeichnung: 'Computerraum',
          hat_notiz: true,
          komponenten_arten: [
            'PC', 'Beamer', 'Switch'
          ]
        },
        {
          id: 2,
          nr: '022',
          bezeichnung: 'Computerraum',
          hat_notiz: false,
          komponenten_arten: null
        }
        , {
          id: 3,
          nr: '324',
          bezeichnung: 'Elektro',
          hat_notiz: true,
          komponenten_arten: [
            'PC', 'Beamer'
          ]
        }
      ]);
    }
    return this.httpClient.get<Room[]>(environment.url + '/room/all');
  }

  public getAllGroups(): Observable<Roles[]> {
    if (environment.isMock) {
      return of([
        {
          id: 1,
          bezeichnung: 'Lehrkraft',
          privilegiert: false,
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
      return this.httpClient.get<User[]>(environment.url + '/user/all').toPromise();
    }
  }

  public setUserPassword(body: any): Promise<void> {
    if (environment.isMock) {
      return Promise.resolve();
    } else {
      return this.httpClient.post<void>(environment.url + '/user/setpassword', body).toPromise();
    }
  }

  public setUserGroupChange(body: any): Promise<void> {
    if (environment.isMock) {
      return Promise.resolve();
    } else {
      return this.httpClient.post<void>(environment.url + '/user/changegroup', body).toPromise();
    }
  }

  public deleteUser(id: number): Promise<void> {
    if (environment.isMock) {
      return Promise.resolve();
    } else {
      return this.httpClient.get<void>(environment.url + '/user/delete?id=' + id).toPromise();
    }
  }

  public registerUser(body: any): Promise<any> {
    if (environment.isMock) {
      return Promise.resolve();
    } else {
      return this.httpClient.post<any>(environment.url + '/user/register', body).toPromise();
    }
  }
}
