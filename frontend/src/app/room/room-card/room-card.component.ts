import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.less']
})
export class RoomCardComponent implements OnInit {
  @Input() public card = {  }


  constructor() { }

  ngOnInit() {
  }

  
}
