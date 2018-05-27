import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectmg',
  templateUrl: './projectmg.component.html',
  styleUrls: ['./projectmg.component.css']
})
export class ProjectmgComponent implements OnInit {
  private funcpoints:Array<funcpoint>;
  constructor() { }
  isUpdateTR=1;

private selectResume=false;
  ngOnInit() {
    this.funcpoints=[
      new funcpoint("功能点1","普通",545,false),
      new funcpoint("功能点2","紧急",452,false),
      new funcpoint("功能点3","严重",319,false),
    ]
  }
  findResume(){
   this. selectResume=true;
      }
    }
  export class funcpoint{
  constructor(
    public name:string,
    public priority: string,
    public during: number,
    public isUpdateModel:boolean
  ) { }  
}

