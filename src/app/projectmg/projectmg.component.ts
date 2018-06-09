import { Component, OnInit } from '@angular/core';
import { FuncPoint } from './funcPoint' 
import { ProjectmgService } from './projectmg.service';
import { Resume } from './resume' 
import { Project } from './project'
import * as $ from 'jquery'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projectmg',
  templateUrl: './projectmg.component.html',
  providers: [ ProjectmgService ],
  styleUrls: ['./projectmg.component.css']
})
export class ProjectmgComponent implements OnInit {
  funcpoints: FuncPoint[];
  projects: Project[];
  resume:Resume;
  pro: Project;
  resumes:Resume[];
  key1:String;
  key2:String;
  key3:String;
  proPeriod:number;
  proPulse:number;
  protitle:String;
  proLevel:number;
  searchKey:String;
  selectedids:String
  funcpoint:FuncPoint;
  index:number;
  constructor(private projectmgService: ProjectmgService) { }
  isUpdateTR=1;

  private selectResume=false;
  ngOnInit() {
   this.getFuncpoints();
   this.getProjectProperties();
  }
  sendtitle(funcpoint2){
     this.funcpoint=funcpoint2;
  }
  getFuncpoints(): void {
    this.projectmgService.getFuncPointes()
      .subscribe(funcpoints => this.funcpoints = funcpoints);
  }
  submitDJW(){
    var projecttitle=$("#projectTitleAnays").text();
    var sumDay=$("#sumDay").val();
    var fid=this.funcpoint.id;
    var personnumber=$("#pnumberDJW").val();
    var startTime=$("#startDJW").val();
    var endTime=$("#endDJW").val();
    var selectedids2="";
    $("input:checked").each(function(){
      selectedids2=this.id+","+selectedids2;
    });
    this.projectmgService.postResumeid(selectedids2,personnumber,startTime,endTime,fid,sumDay,projecttitle).subscribe(selectedids2 => {alert("指派成功，还需指定人员收到后确认")});
    $('#formDJW')[0].reset(); 
  }
  //根据关键字遍历简历
  findResume() : void {
    this.resumes=null
   this. key1=$("#key1DJW").val()
   this. key2=$("#key2DJW").val()
   this. key3=$("#key3DJW").val()
    this.projectmgService.getResumeByKey(this.key1,this.key2,this.key3).subscribe(resumes => {
      this.resumes = resumes
      this. selectResume=true;
      if(resumes.length==0){
        alert("没有数据");
      }
    });
  }
//根据搜索框中的用户名遍历简历
  findResumeByName():void{
this.resumes=null;
this.searchKey=$("#searchid").val();
console.log($("#searchid").val());
this.projectmgService.getResumeBySearchKey(this.searchKey).subscribe(resumes => {
  this.resumes = resumes
  this. selectResume=true;
  if(resumes.length==0){
    alert("没有数据");
  }
})
  }
  getProjectProperties(): void {
    this.projectmgService.getProjectProperties()
      .subscribe(projects => this.projects = projects);
  }
  updateProjectProperties():void{
    this.protitle=$("#projectTitleAnays").text();
    this.proPeriod=$("#projectPeriodAnays").val();
    this.proLevel=$("#projectLevelAnays").val();
    this.proPulse=$("#projectPulseAnays").val();
    console.log(this.protitle,this.proPeriod,this.proLevel,this.proPulse);
    this.projectmgService.updateProjectProperties(this.protitle,this.proPeriod,this.proLevel,this.proPulse);
  }
}
