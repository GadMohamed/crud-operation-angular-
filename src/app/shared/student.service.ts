import { Injectable } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  formData:Student;

  constructor() { }

}
