import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-device-card',
  templateUrl: './add-device-card.component.html',
  styleUrls: ['./add-device-card.component.less']
})
export class AddDeviceCardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public createNewDevice() {
    this.router.navigate(['devices/create']);
  }

}
