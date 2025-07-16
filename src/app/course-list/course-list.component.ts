import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseCardComponent } from "../course-card/course-card.component";
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-list',
  imports: [ CommonModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
[x: string]: any;
  title :string = "AVAILABLE COURSES";
 
  courses :Course [] = [ ] 

  wishListCourses :string [] = []

  constructor(private courseService:CourseService, private route:ActivatedRoute){
           
  }

  ngOnInit(): void{
    this.route.queryParamMap.subscribe(params => {
      const description = params.get('desc');
      this.loadCourses(description);
    })
  }

   loadCourses(desc: string|null){
    this.courseService.getCourses(desc).subscribe({
      next:(response:Course[])=>{
        this.courses=response;
      },
      error:(err)=>{
        console.log(err);
      }
    });
    console.log("initialized");
  }

  onWishList(course: string) {
console.log("Current wishlist:", this.wishListCourses);
    const index = this.wishListCourses.indexOf(course);
    if (index < 0) {
      this.wishListCourses.push(course);
      console.log(this.wishListCourses)
    }
    else if(index >-1){
      alert(course+" is already in Wishlist");
    }
  }

  removeFromWishList(course: string) {
    const index = this.wishListCourses.indexOf(course);
    if (index !== -1) {
      this.wishListCourses.splice(index, 1);
    }
  }

  onCourseBooked(course:Course): void{
    console.log('Parent'+course.name)
    alert('Course Booked: '+course.name)
  }

}
