import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Roles } from 'src/app/fe-entities/roles.entity';
import { User } from 'src/app/fe-entities/user.entity';

import { ApiClientService } from '../../core/api-client.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-config-user',
  templateUrl: './config-user.component.html',
  styleUrls: ['./config-user.component.less']
})
export class ConfigUserComponent implements OnInit{

  public roles: Roles[] = [];
  public users: User[];

  public form: FormGroup;

  constructor(private builder: FormBuilder, private api: ApiClientService, private authService: AuthService) { 
    console.log("GEtt messa");
    
      console.log(this.authService.isAdmin);
      
    
  }

  async ngOnInit() {
    
    this.reloadTable();
  }

  public saveChange(index: number): void {
    const changes = (this.form.get('users') as FormArray).controls[index].value;
    const uid = this.users[index].userid;
    const pwchange = {
      id: uid,
      pw: changes.pw
    };
    const rolechange = {
      id: uid,
      groupid: changes.groupid
    };

    if (changes.pw.trim() !== '') {
      this.api.setUserPassword(pwchange).then();
    }
    this.api.setUserGroupChange(rolechange).then( () => this.reloadTable());
  }

  private async reloadTable() {
    this.api.getAllGroups().subscribe(obs => this.roles = obs.sort((a, b) => a.bezeichnung.localeCompare(b.bezeichnung)));
    await this.api.getAllUser().then(obs => this.users = obs.sort((a, b) => a.username.localeCompare(b.username)));

    this.form = this.builder.group({
      addUser: this.builder.group({
        username: new FormControl('', Validators.required),
        firstname: new FormControl('', Validators.required),
        lastname: new FormControl('', Validators.required),
        groupid: new FormControl(1, Validators.required),
        pw: new FormControl('', Validators.required),
      }),
      users: this.builder.array([])
    });

    this.users.forEach(user =>
      (this.form.get('users') as FormArray).push(this.builder.group({
        groupid: new FormControl(user.groupid, Validators.required),
        pw: new FormControl(''),
      })));
  }

  public deleteUser(index: number): void {
    this.api.deleteUser(this.users[index].userid).then(() => this.reloadTable());
  }

  public saveUser(): void {
    const newUser = this.form.get('addUser').value;

    this.api.registerUser(newUser).then(res => {
      if (!(res instanceof HttpErrorResponse)) {
        this.reloadTable();
      }
    });
  }
}
