import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { threadId } from 'worker_threads';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course',
  imports: [NgStyle,DatePipe,CurrencyPipe],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent implements OnInit {
viewDetails(arg0: any) {
throw new Error('Method not implemented.');
}
onWishList() {
throw new Error('Method not implemented.');
}
onCourseBooked() {
throw new Error('Method not implemented.');
}

course!: Course;
  // @Input() course !: Course;

  // @Output() clickCourseByID() = new EventEmitter<Course>();
constructor (private courseService:CourseService, private route:ActivatedRoute){}

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const idStr =params.get('id');
    if (idStr){
      const id = +idStr;
      this.onClickCourseByID(id);
    }
  })
}

  onClickCourseByID(id:number){
    this.courseService.getCoursesbyId(id).subscribe({
      next:(response:Course)=>{
        this.course=response;
        console.log(this.course);
        
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
