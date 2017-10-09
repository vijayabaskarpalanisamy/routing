import { Component, OnInit } from '@angular/core';
import { Student } from "../student";
import { StudentService } from "../student.service";

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent implements OnInit {

  
 st: Student[];
  stuu: Student;
   constructor(private stuService: StudentService) {}
  getStudentss(){
    this.stuService.getStudents().then(stu => this.st = stu);
  }
  ngOnInit() {
    this.getStudentss();
  }
  onSelect(stuu : Student): void {
    this.stuu = stuu;
  }
}
