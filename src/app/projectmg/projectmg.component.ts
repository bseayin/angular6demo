import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectmg',
  templateUrl: './projectmg.component.html',
  styleUrls: ['./projectmg.component.css']
})
export class ProjectmgComponent implements OnInit {

  constructor() { }
private selectResume=false;
  ngOnInit() {
  }
  findResume(){
   this. selectResume=true;
      }
}
