import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussmodule',
  templateUrl: './discussmodule.component.html',
  styleUrls: ['./discussmodule.component.css']
})
export class DiscussmoduleComponent implements OnInit {
  private demandconfirms:Array<demandconfirm>
  private content:String
  constructor() { }
  isUpdateTR=1; 
  ngOnInit() {
    this.demandconfirms=[
      new demandconfirm(1,"任务1","功能1","1111-11-11","1111-11-11","未开始","内容1","通过",false),
      new demandconfirm(2,"任务2","功能2","1111-11-11","1111-11-11","未开始","内容2","通过",false),
      new demandconfirm(3,"任务3","功能3","1111-11-11","1111-11-11","未开始","内容3","通过",false),
      new demandconfirm(4,"任务4","功能1","1111-11-11","1111-11-11","未开始","内容4","通过",false)

    ]
  }
  showcontent(content1){
    this.content=content1.content;
   }
  update(i){
    this.demandconfirms[i].isUpdateModel=true;
  }
  cancelupdate(i){
    this.demandconfirms[i].isUpdateModel=false;
  }
  delete(i){
    this.demandconfirms.splice(i,1);
  }
  updateConfrim(i){
    this.demandconfirms[i].isUpdateModel=false;
  }
}
export class demandconfirm{
  constructor( 
    public id:number,
    public taskName:String,
    public functionPoint:String,
    public startTime:String,
    public endTime:String,
    public taskStatus:String,
    public content:String ,
    public isPass:String,
    public isUpdateModel:boolean
  )  { }
}