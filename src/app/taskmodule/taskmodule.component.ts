import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskmodule',
  templateUrl: './taskmodule.component.html',
  styleUrls: ['./taskmodule.component.css']
})
export class TaskmoduleComponent implements OnInit {
  private tasks:Array<task>
  private content:String
  constructor() { }
  isUpdateTR=1; 
  ngOnInit() {
    this.tasks=[
      new task(1,"任务1","功能1","1111-11-11","1111-11-11","未开始","内容1",false),
      new task(2,"任务2","功能2","1111-11-11","1111-11-11","未开始","内容2",false),
      new task(3,"任务3","功能3","1111-11-11","1111-11-11","未开始","内容3",false),
      new task(4,"任务4","功能1","1111-11-11","1111-11-11","未开始","内容4",false)
    ]
  }
  showcontent(content1){
    this.content=content1.content;
   }
  update(i){
    this.tasks[i].isUpdateModel=true;
  }
  cancelupdate(i){
    this.tasks[i].isUpdateModel=false;
  }
  delete(i){
    this.tasks.splice(i,1);
  }
  updateConfrim(m:task){
    console.log("updateConfrimMember--i="+m.taskName)
    console.log(m)
  }
}
export class task{
  constructor( 
    public id:number,
    public taskName:String,
    public functionPoint:String,
    public startTime:String,
    public endTime:String,
    public taskStatus:String,
    public content:String ,
    public isUpdateModel:boolean
  )  { }
}