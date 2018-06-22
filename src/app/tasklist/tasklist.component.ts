import { Component, OnInit } from '@angular/core';
import { TasklistService } from './tasklist.service';
import { Task } from './task'
import * as $ from 'jquery'
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  tasks: Task[];
private tasklist:Array<Task>;
private taskcontent:string;
private showFlag=false;
public temptask:Task;
  constructor(private tasklistService: TasklistService) { }

  ngOnInit() {
     this.getgetTasks();

     }
     getgetTasks(): void {
       this.tasklistService.getTasks()
         .subscribe(tasks => this.tasks = tasks);
     }
     show(content){
      this.taskcontent=content;
     }
    updateTask(){
      this.showFlag=!this.showFlag;
    }
    deleteTask(id:string){
      this.showFlag=!this.showFlag;
    }
    cancel(){
      this.showFlag=!this.showFlag;
    }
    ensure(){
      this.showFlag=!this.showFlag;

    }
    add(title: String,demand:String,pId:number,uId:number,startTime:Date,endTime:Date): void {
      this.tasklistService.addtask2(title,demand,pId,uId,startTime,endTime)
        .subscribe(adders => {
          alert("添加成功!");
          this.getgetTasks();
          $('#addfrom')[0].reset();   
          
        });
    }
  // add(){
  //   this.temptask.title=$("#title").val();
  //   this.temptask.demand=$("#demand").val();
  //   this.temptask.pId=$("#pId").val();
  //   this.temptask.uId=$("#uId").val();
  //   this.temptask.startTime=$("#startTime").val();
  //   this.temptask.endTime=$("#endTime").val();
  //   this.tasklistService.addtask(this.temptask)
  //     .subscribe(adders => {
  //       alert("添加成功!");
  //       this.getgetTasks();
  //       $('#addfrom')[0].reset();   
        
  //     });
  // }
    
}

