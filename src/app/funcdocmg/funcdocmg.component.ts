import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcdocmg',
  templateUrl: './funcdocmg.component.html',
  styleUrls: ['./funcdocmg.component.css']
})
export class FuncdocmgComponent implements OnInit {
  private funcpoints:Array<funcpoint>;
  constructor() { }
  isUpdateTR=1;


  ngOnInit() {
    this.funcpoints=[
      new funcpoint("功能点1","一","外部逻辑"),
      new funcpoint("功能点2","一","内部链接"),
      new funcpoint("功能点3","二","外部逻辑"),
    ]
  }
  
}
export class funcpoint{
  constructor(
    public name:String,
    public module:String,
    public node:String
  ){}
  

}