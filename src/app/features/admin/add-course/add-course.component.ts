import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course } from '../../../models/course.model';
import { CourseService } from '../../../services/course.service';



@Component({
  selector: 'app-add-course',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent implements OnInit{
  addCourseForm !:FormGroup;
  submissionSuccess: boolean= false;
  submissionError: string ='';

  constructor(private fb:FormBuilder, private courseService:CourseService) {}

  ngOnInit(): void {
    this.addCourseForm = this.fb.group({
      title: ['',[Validators.required, Validators.minLength(5)]],
      desc: ['',[Validators.required]],
      price: [0,[Validators.required]],
      date: [0,[Validators.required]],
      soldOut:[false,[Validators.required]],
      onSale:[false,[Validators.required]],
      img:['',[Validators.required]]
    });
  }
  get title() {
    return this.addCourseForm.get('title');
  }

  get desc() {
    return this.addCourseForm.get('desc');
  }

  get price() {
    return this.addCourseForm.get('price');
  }

  get date() {
    return this.addCourseForm.get('date');
  }

  get soldOut() {
    return this.addCourseForm.get('soldOut');
  }

  get onSale() {
    return this.addCourseForm.get('title');
  }
  get img() {
    return this.addCourseForm.get('img');
  }

  onSubmit(): void {
    if(this.addCourseForm.invalid) return;

    const newCourse: Course = {
      id:0,
      name: this.addCourseForm.value.title,
      desc: this.addCourseForm.value.desc,
      price: this.addCourseForm.value.price,
      date: this.addCourseForm.value.date,
      soldOut: this.addCourseForm.value.soldOut,
      onSale: this.addCourseForm.value.onSale,
      img: this.addCourseForm.value.img
    }

    this.courseService.addCourse(newCourse).subscribe({
      next: (student) => {
        console.log('Student signed up', student);
        this.submissionSuccess = true;
        this.addCourseForm.reset();
      },

      error: (err) => {
        console.log('Error',err);
        this.submissionError = 'There was some error: '+err;
      }
    })
  }
}


