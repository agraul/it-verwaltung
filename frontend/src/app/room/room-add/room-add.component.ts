import { Component, OnInit } from '@angular/core';
import { ApiClientService } from 'src/app/core/api-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.less']
})
export class RoomAddComponent implements OnInit {

  room = {
    nr: '',
    bezeichnung: '',
    notiz: ''
  }
  public warn = false;

  constructor(private api: ApiClientService, private router: Router) { }

  ngOnInit() {
  }

  addRoom() {
    if(this.room.nr != '' && this.room.bezeichnung != ''){
      this.api.createNewRoom(this.room).then(()=>{
        this.router.navigate(['/rooms']);
      })
    } else {
      this.warn = true;
    }
  }

}
