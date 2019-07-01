import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDetailedComponent } from './device-detailed.component';

describe('DeviceDetailedComponent', () => {
  let component: DeviceDetailedComponent;
  let fixture: ComponentFixture<DeviceDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
