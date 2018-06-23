import { Component, OnInit } from '@angular/core';
import { TasklistService } from './tasklist.service';
import { Task } from './task'
@Component({
  selector: 'app-searchtask',
  templateUrl: './searchtask.component.html',
  styleUrls: ['./searchtask.component.css']
})
export class SearchtaskComponent implements OnInit {
  tasks: Task[];
  private tasklist:Array<Task>;
  constructor(private tasklistService: TasklistService) { }

  ngOnInit() {
    this.getgetTasks();
  }
  getgetTasks(): void {
    this.tasklistService.getTasks()
      .subscribe(tasks => this.tasks = tasks);
      console.log(this.tasks);
  }
  getTaskByStatus(status) :void{
    this.tasklistService.getTasksByStatus(status).subscribe(tasks=>this.tasks=tasks);

  }
}
