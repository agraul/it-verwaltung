import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device-overview',
  templateUrl: './device-overview.component.html',
  styleUrls: ['./device-overview.component.less']
})
export class DeviceOverviewComponent implements OnInit {

  public devices;
  public SearchText = '';

  constructor() { }

  ngOnInit() {
  }

}
