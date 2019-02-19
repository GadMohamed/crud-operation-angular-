import { Injectable } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import { Student } from './student.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  formData:Student;

  constructor(private firestore : AngularFirestore) { }

  getStudent()
  {
    return this.firestore.collection('student').snapshotChanges();
  }

}
