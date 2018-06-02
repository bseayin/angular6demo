import { Component, OnInit } from '@angular/core';
import { FuncPoint } from './funcPoint' 
import { ProjectmgService } from './projectmg.service';
import { Resume } from './resume' 

@Component({
  selector: 'app-projectmg',
  templateUrl: './projectmg.component.html',
  providers: [ ProjectmgService ],
  styleUrls: ['./projectmg.component.css']
})
export class ProjectmgComponent implements OnInit {
  funcpoints: FuncPoint[];
  resumes:Resume[];
  key1:String
  key2:String
  key3:String
  constructor(private projectmgService: ProjectmgService) { }
  isUpdateTR=1;

  private selectResume=false;
  ngOnInit() {
   this.getFuncpoints();
  }
  getFuncpoints(): void {
    this.projectmgService.getFuncPointes()
      .subscribe(funcpoints => this.funcpoints = funcpoints);
  }
  findResume() : void {
    console.log($("#key1DJW").val());
   this. key1=$("#key1DJW").val()
   this. key2=$("#key2DJW").val()
   this. key3=$("#key3DJW").val()
    alert("进来了")
    this.projectmgService.getResumeByKey(this.key1,this.key2,this.key3).subscribe(resumes => this.resumes = resumes);
       this. selectResume=true;
           }
}
