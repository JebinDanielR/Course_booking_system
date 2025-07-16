import { Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course/course.component';
import { AdminDashboardComponent } from './features/admin/admin-dashboard/admin-dashboard.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

export const routes: Routes = [
    {path: '',redirectTo:'courses',pathMatch:'full'},
    {path:'courses',component:CourseListComponent},
    // {path:'courses/:id',component:CourseComponent},
    {path:'about',component:AboutPageComponent},
    {path:'signup',component:SignupFormComponent},
    // {path:'admin-dashboard',component:AdminDashboardComponent},


    {path:'admin', loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)}
];
