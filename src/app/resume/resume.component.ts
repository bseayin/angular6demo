import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  private resumes:Array<resume>;
  constructor() { }

  ngOnInit() {
    this.resumes=[
      new resume(1,"uuu","黄琛","天问","评论模块"),
      new resume(2,"扫地僧","王泽世","任务管理系统","显示模块"),
      new resume(3,"zw","张伟","儿童行为管理系统","模糊查询"),
      new resume(4,"zzy","张瑞阳","任务管理系统","后端查询模块"),
      new resume(5,"陆宇超","陆宇超","天问","上传头像模块"),

    ]
  }
}
  export class resume{
    constructor(
      public id:number,
      public name:string,
      public realname: string,
      public project:string,
      public funcpoint:string,
     
    ) { }
}