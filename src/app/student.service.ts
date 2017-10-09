import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';;
import {Student} from './student';

import { Headers, Http } from '@angular/http';

@Injectable()
export class StudentService {
 private headers = new Headers({'Content-Type': 'application/json'});
  constructor( private http:Http) { }
 
getStudents(): Promise<Student[]> {
    return this.http.get('http://localhost:8080/college')
      .toPromise()
      .then(response => response.json() as Student[])
      .catch(this.handleError);
  }
 
  createStudent(stu : Student): Promise<Student> {
    return this.http.post('http://localhost:8080/college',JSON.stringify(stu), {headers : this.headers})
      .toPromise()
      .then(res => res.json() as Student)
      .catch(this.handleError);
  }
      private handleError(error: any): Promise<any> {
    console.error('Error', error); 
    return Promise.reject(error.message || error);
  }
  }
