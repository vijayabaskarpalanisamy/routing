import {Student} from '../student';
import {StudentService} from '../student.service';
import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
 
export class CreateStudentComponent implements OnInit {
  
  student = new Student;
  constructor(private stuService: StudentService) {}
 
  ngOnInit() {
  }
  addStudent() {
  this.stuService.createStudent(this.student);
   
  }
}