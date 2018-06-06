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
      new funcpoint("一","功能点1","已编辑"),
      new funcpoint("一","功能点2","未编辑"),
      new funcpoint("二","功能点3","已编辑"),
    ]
  }
  changeimg(img):void{
    img.src="";
  }
}
export class funcpoint{
  constructor(
    public name:String,
    public module:String,
    public node:String
  ){}

}