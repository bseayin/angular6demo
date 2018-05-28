import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teamfiles',
  templateUrl: './teamfiles.component.html',
  styleUrls: ['./teamfiles.component.css']
})
export class TeamfilesComponent implements OnInit {
  private splitplans:Array<splitplan>
  private content:String
  constructor() { }
  isUpdateTR=1; 
  itemClass1="list-group-item list-group-item-action";
  itemClass2="list-group-item list-group-item-action";
  itemClass3="list-group-item list-group-item-action";
  itemClass4="list-group-item list-group-item-action";
  itemClass5="list-group-item list-group-item-action";
  ngOnInit() {
    this.splitplans=[
      new splitplan(1,"冲刺1","天工开物","1111-11-11","1111-11-11","内容1","未开始"),
      new splitplan(2,"冲刺2","天工开物","1111-11-11","1111-11-11","内容2","未开始"),
      new splitplan(3,"冲刺3","天工开物","1111-11-11","1111-11-11","内容3","未开始"),
      new splitplan(4,"冲刺4","天工开物","1111-11-11","1111-11-11","内容4","未开始"),
      new splitplan(5,"冲刺5","天工开物","1111-11-11","1111-11-11","内容5","未开始")
    ]
  }
  clickItem(item:any){
    this.itemClass1="list-group-item list-group-item-action";
    this.itemClass2="list-group-item list-group-item-action";
    this.itemClass3="list-group-item list-group-item-action";
    this.itemClass4="list-group-item list-group-item-action";
    this.itemClass5="list-group-item list-group-item-action";
if("A"==item){
  this.itemClass1="list-group-item list-group-item-action active";
}
if("B"==item){
  this.itemClass2="list-group-item list-group-item-action active";
}
if("C"==item){
  this.itemClass3="list-group-item list-group-item-action active";
}
if("D"==item){
  this.itemClass4="list-group-item list-group-item-action active";
}
  }
  showcontent(content1){
   this.content=content1.content;
  }

}
export class splitplan{
  constructor(
    public id:number,
    public splitName:String,
    public projectName:String,
    public startTime:String,
    public endTime:String,
    public content:String,
    public status:String
  ) { }
}
