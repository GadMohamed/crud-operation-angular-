import { Component, OnInit } from '@angular/core';
import { StudentService } from '../shared/student.service';
import { Student } from '../shared/student.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private service :StudentService) { }

  list : Student[];

  ngOnInit() {
   

    this.service.getStudent().subscribe(responceArry => {

      this.list = responceArry.map(item => {

       return {
          id : item.payload.doc.data(),
         ...item.payload.doc.data()} as Student ;
      })

    })

  }

  onEdit(std:Student)
  {
    this.service.formData = Object.assign({},std);
  }

}
