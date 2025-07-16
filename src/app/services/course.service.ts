import { HttpClient, httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  find(arg0: (c: any) => boolean) {
    throw new Error('Method not implemented.');
  }

  // private courses: Course[] = [];

  private baseUrl = 'http://localhost:3000';

  constructor(private httpResource:HttpClient) { }

  getCourses(desc?:string|null): Observable <Course[]>{
    let url = `${this.baseUrl}/courses`;
    if(desc){
      url += `?desc=${desc}`;
    }
    return this.httpResource.get<Course[]>(url);
  }

  getCoursesbyId(id:number): Observable<Course>{
    return this.httpResource.get<Course>(`${this.baseUrl}/courses/${id}`);
  }

  getStudents(): Observable<Student[]> {
    return this.httpResource.get<Student[]>(`${this.baseUrl}/students`);
  }

  addStudent(student:Student): Observable<Student>{
    return this.httpResource.post<Student>(`${this.baseUrl}/students`,student);
  }

  addCourse(course:Course): Observable<Course>{
    return this.httpResource.post<Course>(`${this.baseUrl}/courses`,course);
  }
}
