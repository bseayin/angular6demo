import { Component, OnInit } from '@angular/core';
import { FuncPoint } from './funcPoint' 
import { ProjectmgService } from './projectmg.service';
import { Resume } from './resume' 
import { Project } from './project'
import * as $ from 'jquery'

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
  constructor(private projectmgService: ProjectmgService) { }
  isUpdateTR=1;

  private selectResume=false;
  ngOnInit() {
   this.getFuncpoints();
   this.getProjectProperties();
  }
  getFuncpoints(): void {
    this.projectmgService.getFuncPointes()
      .subscribe(funcpoints => this.funcpoints = funcpoints);
  }
  submitDJW(){
    console.log($("input:checked").val());
  
   
    var selectedids2="";
    $("input:checked").each(function(){
      
      console.log("被选中的id是："+this.id);
      selectedids2=this.id+","+selectedids2;
    });
    console.log("全部被选中的ids="+selectedids2);
    $('#formDJW')[0].reset(); 
  }
  findResume() : void {
    this.resumes=null
   this. key1=$("#key1DJW").val()
   this. key2=$("#key2DJW").val()
   this. key3=$("#key3DJW").val()
    this.projectmgService.getResumeByKey(this.key1,this.key2,this.key3).subscribe(resumes => {
      this.resumes = resumes
      console.log(this.resumes);
      this. selectResume=true;
      if(resumes.length==0){
        alert("没有数据");
      }
    });
  }

  findResumeByName():void{
this.resumes=null;
this.searchKey=$("#searchid").val();
console.log($("#searchid").val());
this.projectmgService.getResumeBySearchKey(this.searchKey).subscribe(resumes => {
  this.resumes = resumes
  console.log(this.resumes);
  this. selectResume=true;
  if(resumes.length==0){
    alert("没有数据");
  }
})
  }
  /**
   * 获取当前项目的属性
   */
  getProjectProperties(): void {
    this.protitle=$("#projectTitleAnays").text();
    this.projectmgService.getProjectProperties(this.protitle)
      .subscribe(projects => this.projects = projects);
  }
  /**
   * 修改当前项目的属性
   */
  updateProjectProperties():void{
    this.protitle=$("#projectTitleAnays").text();
    this.proPeriod=$("#projectPeriodAnays").val();
    this.proLevel=$("#projectLevelAnays").val();
    this.proPulse=$("#projectPulseAnays").val();
    console.log(this.protitle,this.proPeriod,this.proLevel,this.proPulse);
    this.projectmgService.updateProjectProperties(this.protitle,this.proPeriod,this.proLevel,this.proPulse).subscribe(projects=>this.getProjectProperties());

  }
}
