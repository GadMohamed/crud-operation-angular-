import { Injectable } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

form = new FormGroup({
  $key: new FormControl(null),
  fullName : new FormControl(''),
  phone : new FormControl(''),
  address : new FormControl(''),
  dateOfBirth : new FormControl(''),
  image : new FormControl(''),

})

}
