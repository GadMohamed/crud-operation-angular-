import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {


  constructor(private service : StudentService,private fireStore : AngularFirestore,private toastr: ToastrService) { }

  ngOnInit() {

    this.resetForm();
  }

resetForm(form? : NgForm)
{

  if(form != null)
  form.resetForm();
  this.service.formData = {
    
    id:null,
    studentName:'',
    Faculty:'',
    studentAddress:'',
    studentphone:'',
    studentBirthDay:null,
    image:'',

  };

};

onSubmit(form : NgForm)
{
  let data = form.value;
  this.fireStore.collection('student').add(data);
  this.resetForm(form);
  this.toastr.success('Added Successfully ', 'Student');
}



}
