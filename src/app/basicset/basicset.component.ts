import { Component, OnInit } from '@angular/core';
import { Project } from './project' 
import { BasicsetService } from './basicset.service';
@Component({
  selector: 'app-basicset',
  templateUrl: './basicset.component.html',
  styleUrls: ['./basicset.component.css']
})
export class BasicsetComponent implements OnInit {
  private pp:Project
  private adders:String
  projects: Project[];
  constructor(private BasicsetService: BasicsetService) { }

  ngOnInit() {
    this.getProject();
  }
  getProject(): void {
    this.BasicsetService.getProject()
      .subscribe(projects => this.projects = projects);
  }
  add(projectname): void {
    projectname= projectname.trim();
    this.BasicsetService.addProject(projectname)
      .subscribe(adders => {
        alert("创建成功!");
        // $('#addfrom')[0].reset();   
      });
}}
