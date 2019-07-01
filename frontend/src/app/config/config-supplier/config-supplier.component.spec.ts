import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigSupplierComponent } from './config-supplier.component';

describe('ConfigSupplierComponent', () => {
  let component: ConfigSupplierComponent;
  let fixture: ComponentFixture<ConfigSupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigSupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
