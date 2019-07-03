import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-device-card',
  templateUrl: './device-card.component.html',
  styleUrls: ['./device-card.component.less']
})
export class DeviceCardComponent implements OnInit {
  @Input() public card = {  }

  constructor() { }

  ngOnInit() {
  }

}
