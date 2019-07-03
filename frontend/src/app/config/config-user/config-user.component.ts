import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Roles } from 'src/app/fe-entities/roles.entity';
import { User } from 'src/app/fe-entities/user.entity';

@Component({
  selector: 'app-config-user',
  templateUrl: './config-user.component.html',
  styleUrls: ['./config-user.component.less']
})
export class ConfigUserComponent implements OnInit {

  public roles: Roles[] = [];
  public users: User[];

  public form: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.roles = [
      {
        id: 1,
        bezeichnung: 'Lehrkraft',
        privilegiert: false,
      },
      {
        id: 2,
        bezeichnung: 'Systembetreuer',
        privilegiert: true
      }
    ];
    this.users = [
      {
        id: 1,
        benutzername: 'ln@b3.de',
        nachname: 'Nürnberger',
        vorname: 'Lukas',
        gruppe: 2,
        passwort: '123'
      }
    ];

    this.form = this.builder.group({
      addUser: this.builder.group({
        benutzername: new FormControl('', Validators.required),
        vorname: new FormControl('', Validators.required),
        nachname: new FormControl('', Validators.required),
        gruppe: new FormControl(1, Validators.required),
        passwort: new FormControl('', Validators.required),
      }),
      users: this.builder.array([])
    });

    this.users.forEach(user =>
      (this.form.get('users') as FormArray).push(this.builder.group({
        gruppe: new FormControl(user.gruppe, Validators.required),
        passwort: new FormControl(user.passwort, Validators.required),
      })));
  }

  public saveChange(index: number): void {
    const changes = (this.form.get('users') as FormArray).controls[index].value;
    const uid = this.users[index].id;
    const pwchange = {
      id: uid,
      passwort: changes.passwort
    };
    const rolechange = {
      id: uid,
      gruppe: changes.gruppe
    };
    // TODO: BE;
    console.log(pwchange, rolechange);
  }

  public deleteUser(index: number): void {
    // TODO: BE;
    this.users.splice(index, 1);
    (this.form.get('users') as FormArray).removeAt(index);
  }

  public saveUser(): void {
    const newUser = this.form.get('addUser').value;
    newUser.id = Math.random() * 100;
    console.log(newUser);
    this.users.push(newUser);
    (this.form.get('users') as FormArray).push(this.builder.group({
      gruppe: new FormControl(newUser.gruppe, Validators.required),
      passwort: new FormControl(newUser.passwort, Validators.required),
    }));

    const addUser = this.form.get('addUser');
    addUser.get('benutzername').setValue('');
    addUser.get('vorname').setValue('');
    addUser.get('nachname').setValue('');
    addUser.get('passwort').setValue('');
    addUser.get('gruppe').setValue('1');
  }

}
