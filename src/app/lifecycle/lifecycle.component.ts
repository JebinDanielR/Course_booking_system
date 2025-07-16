import { Component, Input } from '@angular/core';
import { CourseCardComponent } from "../course-card/course-card.component";

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css'
})
export class LifecycleComponent {
  @Input() data!:string;

ngOnChanges(){
  console.log('ngOnChanges called');  
}

ngOnInit(){
  console.log('ngOnInit called');
}

ngDoCheck(){
  console.log('ngDoCheck called');
}

ngAfterContentInit(){
  console.log('ngAfterContentInit called');
}

ngAfterViewInit(){
  console.log('ngAfterViewInit called');
}

ngAfterViewChecked(){
  console.log('ngAfterViewChecked called');
}

ngOnDestroy(){
  console.log('ngOnDestroy called');
}
}
