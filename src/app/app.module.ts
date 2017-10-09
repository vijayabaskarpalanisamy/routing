import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './app.routing.module';

import { AppComponent } from './app.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentService } from "./student.service";
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateStudentComponent,
    StudentdetailsComponent,
 

    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

