import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
private tasklist:Array<task>;
  constructor() { }

  ngOnInit() {
      this.tasklist=[
        new task(3,"寻找手艺","宫保鸡丁","2000-6-20","2222-2-28","进行中"),
        new task(3,"寻找手艺","宫保鸡丁","2000-6-20","2222-2-28","进行中"),
        new task(3,"寻找手艺","宫保鸡丁","2000-6-20","2222-2-28","进行中"),
        new task(3,"寻找手艺","宫保鸡丁","2000-6-20","2222-2-28","进行中"),
        new task(3,"寻找手艺","宫保鸡丁","2000-6-20","2222-2-28","进行中"),
      ]
  }

}
export class task{
  constructor(
    public id:number,
    public title:string,
    public demand:string,
    public start_time: string,
    public end_time: string,
    public status:string
  ) { }

}
