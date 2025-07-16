import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../../app.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path: '',
    component:AdminDashboardComponent,
    children: [
      
        {path: 'addcourse', component:AddCourseComponent},
        {path: 'students', component:StudentListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
