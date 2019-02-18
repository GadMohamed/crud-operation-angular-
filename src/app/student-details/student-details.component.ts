import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
  
})
export class StudentDetailsComponent implements OnInit { 

  /*
deleteFile(){
    
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  })

  Toast.fire({
    type: 'success',
    title: 'Signed in successfully'
  })
}
*/


  constructor() {
    
   }

  ngOnInit() {
    
  }

}
