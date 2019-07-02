import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, AbstractControl } from '@angular/forms';
import { Room } from 'src/app/fe-entities/room.entity';

@Component({
  selector: 'app-multi-input',
  templateUrl: './multi-input.component.html',
  styleUrls: ['./multi-input.component.less']
})
export class MultiInputComponent implements OnInit {

  @Input() public form: FormGroup;

  @Input() public label: string;

  @Input() public rooms: Room[] = [];

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    if (!this.form) {
    this.form = this.builder.group({
      array: this.builder.array([])
    });
    this.addItem();
  }
  }

  public get isSelect(): boolean {
    return this.label !== 'Seriennummer';
  }

  public get array() {
    return this.form.get('array') as FormArray;
 }

 public addItem(): void {
    this.array.push(this.builder.control(''));
 }

 public removeItem(index: number): void {
    this.array.removeAt(index);
    this.array.updateValueAndValidity();
 }

 public availableRooms(index?: number): Room[] {
  let id;
  if (index !== undefined && this.array.controls[index]) {
    id = Number(this.array.controls[index].value);
  }
  return this.rooms.filter(room => !this.array.value.some(val => Number(val) === room.id) || room.id === id);
 }


}
