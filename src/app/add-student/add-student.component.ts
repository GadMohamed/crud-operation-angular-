import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {


  constructor(private service : StudentService) { }

  ngOnInit() {

    this.resetForm();
  }

resetForm(form? : NgForm)
{

  if(form != null)
  form.resetForm();
  this.service.formData = {
    
    id:null,
    name:'',
    facultyName:'',
    address:'',
    phone:'',
    dateOFBirth:null,
    image:'',

  };

};


}
