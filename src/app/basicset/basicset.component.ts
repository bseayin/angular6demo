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
  constructor(private BasicsetService: BasicsetService) { }

  ngOnInit() {
  }
  add(projectname): void {
    projectname= projectname.trim();
    alert(projectname)
    this.pp.title=projectname
    this.BasicsetService.addProject(this.pp)
      .subscribe(adders => {
        alert("添加成功!");
        // $('#addfrom')[0].reset();   
      });
}
