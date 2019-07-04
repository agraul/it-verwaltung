import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Deliverer } from 'src/app/fe-entities/deliverer.entity';
import { ApiClientService } from 'src/app/core/api-client.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-config-supplier',
  templateUrl: './config-supplier.component.html',
  styleUrls: ['./config-supplier.component.less']
})
export class ConfigSupplierComponent implements OnInit {
  public form: FormGroup;

  constructor(private builder: FormBuilder, private api: ApiClientService) {}

  ngOnInit() {
    this.reloadTable();
  }

  private reloadTable(): void {
    this.api.getAllDeliverer().then(resp => {
      this.form = this.builder.group({
        addDeliverer: this.buildDelivererGroup(new Deliverer()),
        deliverers: this.builder.array(
          resp
            .sort((a, b) => a.companyname.localeCompare(b.companyname))
            .map(del => this.buildDelivererGroup(del))
        )
      });
    });
  }

  private buildDelivererGroup(del: Deliverer): FormGroup {
    return this.builder.group({
      id: del.id,
      companyname: new FormControl(del.companyname, Validators.required),
      street: new FormControl(del.street, Validators.required),
      plz: new FormControl(del.plz, Validators.required),
      place: new FormControl(del.place, Validators.required),
      tel: new FormControl(del.tel, Validators.required),
      mobile: new FormControl(del.mobile, Validators.required),
      fax: new FormControl(del.fax, Validators.required),
      email: new FormControl(del.email, Validators.required)
    });
  }

  public saveDeliverer(): void {
    const newDeliverer = this.form.get('addDeliverer').value;

    this.api.updateDeliverer(newDeliverer).then(res => {
      if (!(res instanceof HttpErrorResponse)) {
        this.reloadTable();
      }
    });
  }

  public saveChange(control: FormGroup): void {
    // TODO: BE;
  }

  public deleteDeliverer(id: number): void {
    this.api.deleteDeliverer(id).then(() => this.reloadTable());
  }
}
