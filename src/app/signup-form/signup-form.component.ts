import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course } from '../models/course.model';
import { Student } from '../models/student.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-signup-form',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent implements OnInit{
  signUpForm !:FormGroup;
  courses:Course[]=[];
  submissionSuccess: boolean= false;
  submissionError: string ='';
  

  constructor(private fb:FormBuilder,private courseService:CourseService){}

  ngOnInit(){
    this.signUpForm = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      email:['',[Validators.required, Validators.email]],
      enrolledCourseId:  [null, Validators.required]  
    });

    this.courseService.getCourses().subscribe({
      next:(data:Course[]) =>{
        this.courses=data;
      },
      error: (err) =>{
        console.error("Error in fetching courses", err);
      }
    });
  }
  get name() {
    return this.signUpForm.get('name');
  }
 
  get email() {
    return this.signUpForm.get('email');
  }
 
  get enrolledCourseId() {
    return this.signUpForm.get('enrolledCourseId');
  }

  onSubmit(): void {
    if(this.signUpForm.invalid) return;

    const newStudent: Student = {
      id:0,
      name: this.signUpForm.value.name,
      email: this.signUpForm.value.email,
      enrolledCourseIds: [this.signUpForm.value.enrolledCourseId]
    }

    this.courseService.addStudent(newStudent).subscribe({
      next: (student) => {
        console.log('Student signed up', student);
        this.submissionSuccess = true;
        this.signUpForm.reset();
      },

      error:err => {
        console.log('Error',err);
        this.submissionError = 'There was some error: '+err;
      }
    })
  }
}
