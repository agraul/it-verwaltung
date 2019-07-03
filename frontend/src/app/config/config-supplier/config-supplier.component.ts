import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Deliverer } from 'src/app/fe-entities/deliverer.entity';

@Component({
  selector: 'app-config-supplier',
  templateUrl: './config-supplier.component.html',
  styleUrls: ['./config-supplier.component.less']
})
export class ConfigSupplierComponent implements OnInit {

  private deliverers: Deliverer[] = [];

  public form: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    // TODO load BE;
    this.form = this.builder.group({
      addDeliverer: this.buildDelivererGroup(new Deliverer()),
      deliverers: this.builder.array(this.deliverers.map(del => this.buildDelivererGroup(del)))
    });
  }

  private buildDelivererGroup(del: Deliverer): FormGroup {
    return this.builder.group({
      id: del.id,
      firmenname: new FormControl(del.firmenname, Validators.required),
      strasse: new FormControl(del.strasse, Validators.required),
      plz: new FormControl(del.plz, Validators.required),
      ort: new FormControl(del.ort, Validators.required),
      tel: new FormControl(del.tel, Validators.required),
      mobil: new FormControl(del.mobil),
      fax: new FormControl(del.fax),
      email: new FormControl(del.email)
    });
  }

  public saveDeliverer(): void {

    // TODO: BE;
    const newDeliverer = this.form.get('addDeliverer');
    newDeliverer.get('id').setValue(Math.random() + 100);
    (this.form.get('deliverers') as FormArray).push(this.buildDelivererGroup(newDeliverer.value));

    newDeliverer.get('id').setValue(null);
    newDeliverer.get('firmenname').setValue(null);
    newDeliverer.get('strasse').setValue(null);
    newDeliverer.get('plz').setValue(null);
    newDeliverer.get('ort').setValue(null);
    newDeliverer.get('tel').setValue(null);
    newDeliverer.get('mobil').setValue(null);
    newDeliverer.get('fax').setValue(null);
    newDeliverer.get('email').setValue(null);

  }

  public saveChange(control: FormGroup): void {
    // TODO: BE;
  }

  public deleteDeliverer(index: number): void {
    // TOBE: BE;
    (this.form.get('deliverers') as FormArray).removeAt(index);
  }



}
