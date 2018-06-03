import { Component, OnInit } from '@angular/core';
import { TasklistService } from './tasklist.service';
import { Task } from './task'

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  tasks: Task[];
private tasklist:Array<task>;
private showFlag=false;
  constructor(private tasklistService: TasklistService) { }

  ngOnInit() {
     this.getgetTasks();

     }
     getgetTasks(): void {
       this.tasklistService.getTasks()
         .subscribe(tasks => this.tasks = tasks);
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
}

export class task{
  constructor(
    public id:number,
    public title:string,
    public demand:string,
    public start_time: string,
    public end_time: string,
    public status:string,
    public p_id:number,
    public p_leader:string,
    public f_id:number,
    public u_id:number,
    public p_leader_id:number
  ) { }

}
