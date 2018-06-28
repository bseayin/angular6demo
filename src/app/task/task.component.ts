import { Component, OnInit } from '@angular/core';
import {TaskService} from './task.service';
import { Team } from './team' 
import * as $ from 'jquery'
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  CurrentTeams:Team[];
  constructor(private taskService:TaskService) { }

  ngOnInit() {
    this.getUserTeam()
  }
  getUserTeam(): void{
    this.taskService.getUserTeam()
    .subscribe(CurrentTeams => this.CurrentTeams = CurrentTeams);
  }
}
