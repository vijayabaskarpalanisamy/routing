import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {CreateStudentComponent} from './create-student/create-student.component';
import { StudentdetailsComponent } from "./studentdetails/studentdetails.component";



 const routes: Routes = [
     {path:"create", component:CreateStudentComponent},
      {path:"details", component: StudentdetailsComponent },
     
     
     
 ];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}