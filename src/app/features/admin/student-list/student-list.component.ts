import { Component } from '@angular/core';
import { Course } from '../../../models/course.model';
import { Student } from '../../../models/student.model';
import { CourseService } from '../../../services/course.service';

@Component({
  selector: 'app-student-list',
  imports: [],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  loading: boolean = false;
  students: Student[] = [];
  errorMessage: string ='';
  courses: Course[] = [];

constructor(private courseService:CourseService){}

ngOnInit(): void{
this.fetchStudents();
this.fetchCourses();
}

fetchStudents():void {
  this.loading = true;
  this.courseService.getStudents().subscribe({
    next: (data:Student[]) => {
      this.students = data;
      this.loading = false;
    },
    error: (err) => {
      this.errorMessage="Something went wrong" + err;
      this.loading =false;

    }
  })
}

fetchCourses():void{
  this.courseService.getCourses().subscribe({
    next: (data:Course[]) => {
      this.courses = data;
    },
    error:(err)  => {
      console.error(err);
    }
  })
}

getCourseTitle(courseId: number):string{
  const course = this.courses.find(c => c.id ==courseId);
  return course ? course.name : 'Unknown course';
}

}
