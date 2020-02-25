import { CoursesService } from './../assets/courses.service';
import { Component } from '@angular/core';

@Component({
    selector : "courses",
    template: `
    <h2>{{ title}}
    <ul>
    <li *ngFor ="let course of courses">{{course}}</li>
    </ul>
    </h2>
    
    <button class="btn btn-primary" [class.active]="isActive" (click)="onClick($event)"> I am not Robot</button>
    
    <input [(ngModel)]="name" (keyup.enter)="onKeyUp()">
    ` //Template <img src="{{imageUrl}}">
    //<input #name (keyup.enter)="onKeyUp(name.value)">
    //   <input [value]="name" (keyup.enter)="name =$event.target.value; onKeyUp()">
})
export class CoursesComponent{
 title ="List of courses";
 courses;
 name="Sonu Yadav";
 isActive = true;
 onClick($event){
     console.log("Button is clicked",$event);

 }

 onKeyUp(){
    // if($event.keyCode ===13)
     console.log("I am in KeyUp",this.name);
 }
 constructor(service: CoursesService){
     this.courses = service.getCourses();
 }
}