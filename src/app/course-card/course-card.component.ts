import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course-card',
  imports: [NgStyle,CurrencyPipe,DatePipe],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {


@Input() course !: Course;

@Output() courseBooked = new EventEmitter<Course>();
@Output() wishList = new EventEmitter<string>();

constructor(private router:Router){}

viewDetails(courseId:number): void{
  this.router.navigate(['/courses',courseId]);
}

onCourseBooked(): void{
  console.log('Child')
  this.courseBooked.emit(this.course);
}

onWishList(): void{
  this.wishList.emit(this.course.name);
  console.log(this.course.name)
}

}
