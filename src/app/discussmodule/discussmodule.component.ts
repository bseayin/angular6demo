import { Component, OnInit } from '@angular/core';
import { TaskConfirm } from './TaskConfirm'  
import { DiscussmoduleService } from './discussmodule.service';
@Component({
  selector: 'app-discussmodule',
  templateUrl: './discussmodule.component.html',
  styleUrls: ['./discussmodule.component.css']
})
export class DiscussmoduleComponent implements OnInit {
  private taskconfirms:TaskConfirm[];
  public taskconfirm:TaskConfirm;
  private contentmotai:String
  private updaters:String
  private delecters:String
  private adders:String
  constructor(private DiscussmoduleService: DiscussmoduleService) { }
  isUpdateTR=1; 
  ngOnInit() {
    this.getTaskconfirms();
  }
  getTaskconfirms(): void {
    this.DiscussmoduleService.getTaskConfirms()
      .subscribe(taskconfirms => this.taskconfirms = taskconfirms);
  }
  showcontent(content1){
    this.contentmotai=content1.content;
   }
   update(i){
       this.taskconfirms[i].isUpdateModel=true;
     }
   cancelupdate(i){
      this.taskconfirms[i].isUpdateModel=false;
     }
   delete(i){
         this.DiscussmoduleService.deleteTaskConfirms(this.taskconfirms[i].id)
         .subscribe(delecters => {
          // replace the hero in the heroes list with update from server
         alert("删除成功!");
        });;
             this.taskconfirms.splice(i,1);
   }
  updateConfrim(i){
  this.taskconfirms[i].isUpdateModel=false;
  this.DiscussmoduleService.updateTaskConfirms(this.taskconfirms[i])
  .subscribe(updaters => {
    // replace the hero in the heroes list with update from server
   alert("修改成功!");
  });
  }
  add(tId:number,fId:number,startTime:Date,endTime:Date,content:string): void {
    content= content.trim();
    if (!tId) { return; }
    this.DiscussmoduleService.addTaskConfirms2(tId,fId,startTime,endTime,content)
      .subscribe(adders => {
        alert("添加成功!");
        this.getTaskconfirms();
      });
  }


}