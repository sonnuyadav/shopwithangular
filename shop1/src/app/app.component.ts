import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop1';

  viewMode ='map';

  courses =[
    {id:1,name:"BCA"},
    {id:2,name:"MCA"},
    {id:3,name:"MBA"},

  ];
  onClickAdd(){
    this.courses.push({id:4,name:"BBA"});
  };
  onRemove(course){
    
    let index = this.courses.indexOf(course);
    console.log("Course",course, "Index",index);
    this.courses.splice(index,1);
  };
}
