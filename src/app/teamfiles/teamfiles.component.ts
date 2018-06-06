import { Component, OnInit } from '@angular/core';
import { SprintPlan } from './sprintplan'  
import { TeamfilesService } from './teamfiles.service';
@Component({
  selector: 'app-teamfiles',
  templateUrl: './teamfiles.component.html',
  providers: [ TeamfilesService ],
  styleUrls: ['./teamfiles.component.css']
})
export class TeamfilesComponent implements OnInit {
  sprintplans: SprintPlan[];
  // private splitplans:Array<splitplan>
  private content:String
  constructor(private teamfilesService: TeamfilesService) { }
  isUpdateTR=1; 
  ngOnInit() {
    this.getSprintplans();
  }
  getSprintplans(): void {
    this.teamfilesService.getSprintPlans()
      .subscribe(sprintplans => this.sprintplans = sprintplans);
  }
  showcontent(content1){
    this.content=content1.content;
   }
}
